import React from "react";
import { useRouter } from "next/router";
import debounce from 'lodash.debounce';
import Downshift from "downshift";
import ob from 'urbit-ob';
import Sigil from '../Sigil/Sigil';
import cn from 'classnames';

function devSearch(query) {
    return `/api/dev-search?q=${encodeURIComponent(query)}`;
}

function urbitOrgSearch(query) {
    return `/api/urbit-org-search?q=${encodeURIComponent(query)}`;
}

function roadmapSearch(query) {
    return `/api/roadmap-search?q=${encodeURIComponent(query)}`;
}

function opsSearch(query) {
    return `/api/ops-search?q=${encodeURIComponent(query)}`;
}

function patpSearch(query) {
    return (
        (ob.isValidPatp(`~${deSig(query.toLowerCase())}`) &&
            `~${deSig(query.toLowerCase())}`.length < 15) ||
        (!isNaN(query) && query <= 4294967295)
    );
}

function deSig(string) {
    return string.startsWith("~") ? string.substring(1) : string;
}

const Search = ({
    showSearch,
    closeSearch,
    order = ["org", "dev", "ops", "roadmap"],
    ourSite = "https://urbit.org"
}) => {
    const [results, setResults] = React.useState([]);
    const router = useRouter();

    function onSelect(item) {
        setResults([]);
        if (item.url) {
            router.push(item.url);
            return closeSearch();
        }
    }

    const onInputValueChange = debounce(async (query) => {
        if (query?.length) {
            const patp = patpSearch(query)
                ? !isNaN(query)
                    ? ob.patp(query)
                    : ob.patp(ob.patp2dec(`~${deSig(query)}`))
                : null;

            const patpResult = patpSearch(query)
                ? [
                    {
                        type: "PATP",
                        content: {
                            patp: patp,
                            slug: `https://urbit.org/ids/${patp}`,
                        },
                    },
                ]
                : [];

            const siteFetch = (search, source, query) => fetch(search(query)).
                then((res) => res.json())
                .then((res) => {
                    return [...res.glossary.map((item) => ({
                        type: "GLOSSARY",
                        content: item,
                        source
                    })), ...res.results.map((item) => ({
                        type: "RESULT",
                        content: item,
                        source,
                        url: source + "/" + item.slug
                    }))];
                });

            const urbFetch = siteFetch(urbitOrgSearch, "https://urbit.org", query);
            const devFetch = siteFetch(devSearch, "https://developers.urbit.org", query);
            const opsFetch = siteFetch(opsSearch, "https://operators.urbit.org", query);
            const roadmapFetch = siteFetch(roadmapSearch, "https://roadmap.urbit.org", query);

            const [urbitOrgResults, devResults, opsResults, roadmapResults] =
                await Promise.all([urbFetch, devFetch, opsFetch, roadmapFetch]);

            const list = [
                ...patpResult,
                ...order.map((entry) => {
                    switch (entry) {
                        case "org":
                            return urbitOrgResults;
                        case "dev":
                            return devResults;
                        case "ops":
                            return opsResults;
                        case "roadmap":
                            return roadmapResults;
                    }
                })
            ].flat()
                .sort((a, b) => {
                    const aNum = a?.type === "GLOSSARY" ? 1 : -1;
                    const bNum = b?.type === "GLOSSARY" ? 1 : -1;
                    return bNum - aNum;
                });;
            console.log(results);
            setResults(list)
        } else {
            setResults([]);
        }
    }, 250);

    return showSearch
        ? <Downshift
            onSelect={(sel) => onSelect(sel)}
            onInputValueChange={(evt) => onInputValueChange(evt)}
            itemToString={(item) => (item ? item.slug : "")}
            defaultHighlightedIndex={0}
        >
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                isOpen,
                highlightedIndex,
                getRootProps
            }) => (
                <div className="fixed w-screen h-screen z-50 flex flex-col items-center p-4">
                    <div
                        onClick={(event) => closeSearch(event)}
                        className="top-0 left-0 fixed w-screen h-screen bg-washedWall"
                    />
                    <div className="relative flex flex-col max-w-screen-lg md:my-32 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 rounded-xl bg-white min-h-0 overflow-hidden">
                        <div
                            className="inline-block"
                            {...getRootProps({}, { suppressRefError: true })}
                        >
                            <input
                                autoFocus
                                className="text-lg md:text-xl lg:text-2xl font-medium text-green-400 bg-transparent py-2 px-4 outline-none relative w-full"
                                placeholder="Search..."
                                type="text"
                                onClick={(e) => e.stopPropagation()}
                                {...getInputProps({
                                    onKeyDown: (event) => {
                                        if (event.key === "Escape") {
                                            // Prevent Downshift's default 'Escape' behavior.
                                            event.nativeEvent.preventDownshiftDefault = true;
                                            closeSearch(event);
                                        }
                                    },
                                })}
                            />
                        </div>
                        <ul {...getMenuProps()} className="overflow-y-scroll">
                            {isOpen
                                ? results.map((item, index) => {
                                    const selected = highlightedIndex === index;
                                    if (item.type === "PATP") {
                                        return (
                                            <li
                                                className={`cursor-pointer p-2 flex space-x-2 items-center text-left w-full ${selected ? "bg-green-400" : ""
                                                    }`}
                                                {...getItemProps({
                                                    key: item.content.slug + "-" + index,
                                                    index,
                                                    item: item.content,
                                                    selected: highlightedIndex === index,
                                                })}
                                            >
                                                <div className="rounded-md overflow-hidden">
                                                    <Sigil
                                                        patp={item.content.patp}
                                                        size={25}
                                                        icon
                                                    />
                                                </div>
                                                <p className="font-mono">{item.content.patp}</p>
                                            </li>
                                        );
                                    }
                                    if (item.type === "GLOSSARY") {
                                        return (
                                            <li
                                                className={`cursor-pointer flex text-left w-full ${selected ? "bg-green-400" : ""
                                                    }`}
                                                {...getItemProps({
                                                    key: item.content.slug + "-" + index,
                                                    index,
                                                    item: item.content,
                                                    selected: highlightedIndex === index,
                                                })}
                                            >
                                                <div className="font-semibold p-3">
                                                    <p
                                                        className={`text-base ${selected ? "text-white" : "text-wall-600"
                                                            }`}
                                                    >
                                                        {item.content.symbol.length > 0 && (
                                                            <code
                                                                className={`mr-1 rounded px-1 py-0.5 ${selected
                                                                    ? "bg-washedWhite"
                                                                    : "bg-wall-100"
                                                                    }`}
                                                            >
                                                                {item.content.symbol}
                                                            </code>
                                                        )}
                                                        {item.content.name}
                                                    </p>
                                                    <p
                                                        className={`font-normal text-base mt-1 ${selected ? "text-white" : "text-wall-600"
                                                            }`}
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.content.desc,
                                                        }}
                                                    ></p>
                                                </div>
                                            </li>
                                        );
                                    }
                                    if (item.type === "RESULT") {
                                        const our = item.source === ourSite;
                                        const prelude = our
                                            ? ""
                                            : `${item.source.substring(8)} / `

                                        return <li
                                            className={`cursor-pointer flex text-left w-full ${selected ? "bg-green-400" : ""
                                                }`}
                                            {...getItemProps({
                                                key: item.content.link + "-" + index,
                                                index,
                                                item,
                                                selected,
                                            })}
                                        >
                                            <div className="p-3">
                                                <p
                                                    className={`font-medium text-base ${selected ? "text-white" : "text-wall-600"
                                                        }`}
                                                >
                                                    <span className={cn({ "text-wall-400": !our })}>
                                                        {item.content.parent !== "Content"
                                                            ? `${prelude}${item.content.parent} / `
                                                            : prelude + " "}
                                                    </span>
                                                    {item.content.title}
                                                </p>
                                                <p
                                                    className={`text-base font-regular text-small ${selected ? "text-midWhite" : "text-wall-500"
                                                        }`}
                                                >
                                                    {item.content.content}
                                                    {item?.content?.foundOnPage && (
                                                        <span className="italic block">
                                                            Found in page content
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        </li>
                                    }
                                })
                                : null
                            }
                        </ul>
                    </div>
                </div>
            )}
        </Downshift>
        : null
}

export default Search;
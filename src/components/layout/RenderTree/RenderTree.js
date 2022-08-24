import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { join } from "path";
import classnames from "classnames";
import Link from "next/link";

const RenderTree = ({ root, posts }) => {
  const router = useRouter();

  const childPages = (thisLink, children, level = 0) => (
    <ul className="pl-0">
      {Object.entries(children).map(([childSlug, child]) => (
        <li>{pageTree(join(thisLink, childSlug), child, level)}</li>
      ))}
    </ul>
  );

  const pageTree = (thisLink, tree, level = 0) => {
    const firstCrumb =
      "/" + router.asPath.split("/").slice(1).join("/").split("#")[0];
    const includesThisPage = firstCrumb.includes(thisLink + "/");
    const isThisPage = router.asPath === thisLink;
    const [isOpen, toggleTree] = useState(includesThisPage);
    useEffect(() => {
      const handleRouteChange = () => {
        const firstCrumb =
          "/" + router.asPath.split("/").slice(1).join("/").split("#")[0];
        const includesThisPage = firstCrumb.includes(thisLink + "/");
        toggleTree(includesThisPage);
      };

      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeStart", handleRouteChange);
      };
    }, [router.asPath]);
    const activeClasses = classnames({
      hidden: !isOpen,
    });

    const headingItemClasses = classnames({
      "pl-0 text-base font-semibold hover:text-green-400 leading-relaxed":
        level === 0,
      "pl-4 text-base font-semibold hover:text-green-400": level === 1,
      "pl-8 text-base hover:text-green-400": level === 2,
      "dot text-green-400": isThisPage,
      "text-wall-600": !isThisPage,
    });

    const pageItemClasses = classnames({
      "pl-4 text-base hover:text-green-400": level === 0,
      "pl-8 text-base hover:text-green-400": level === 1,
      "pl-12 text-base hover:text-green-400": level === 2,
    });

    if (tree?.type === "tab") {
      return (
        <>
          <p className="text-xs uppercase font-semibold text-wall-400 mt-4">
            {tree.title}
          </p>
          {childPages(thisLink, tree.children, level)}
          {tree.pages.map(({ title, slug }) => {
            const href = join(thisLink, slug);
            const isSelected = router.asPath === href;
            const selectedClasses = classnames({
              dot: isSelected,
              "text-green-400": isSelected,
              "text-wall-600": !isSelected,
            });
            return (
              <li className="ml-0">
                <Link href={href} passHref>
                  <a
                    className={`relative font-semibold inline-block ${selectedClasses} `}
                  >
                    {title}
                  </a>
                </Link>
              </li>
            );
          })}
        </>
      );
    }

    return (
      <>
        <span onClick={() => toggleTree(!isOpen)}>
          <p className={`${headingItemClasses} relative cursor-pointer`}>
            {tree.title}
          </p>
        </span>
        <div className={activeClasses}>
          <ul className={""}>
            {tree.pages.map(({ title, slug }) => {
              const href = join(thisLink, slug);
              const isSelected = router.asPath === href;
              const selectedClasses = classnames({
                dot: isSelected,
                "text-green-400": isSelected,
                "text-wall-600": !isSelected,
              });
              return (
                <li>
                  <Link href={href} passHref>
                    <a
                      className={`relative inline-block ${selectedClasses} ${pageItemClasses} `}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          {childPages(thisLink, tree.children, level + 1)}
        </div>
      </>
    );
  };

  return childPages(root, posts);
};

export default RenderTree;

import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames";

import { DocSearch } from '@docsearch/react';


export default function IntraNav({ search, ourSite = "" }) {
  const [shortcut, setShortcut] = useState("");
  const detectOS = () => {
    const agent = window.navigator.appVersion;
    if (agent.includes("Win")) {
      return "Ctrl+K";
    } else if (agent.includes("Mac")) {
      return "⌘K";
    } else if (agent.includes("Linux")) {
      return "Ctrl+K";
    }
  };

  useEffect(() => {
  }, []);
  const sites = [
    { title: "Urbit.org", href: "https://urbit.org" },
    { title: "Operators", href: "https://operators.urbit.org" },
    { title: "Developers", href: "https://developers.urbit.org" },
    { title: "Roadmap", href: "https://roadmap.urbit.org" },
  ];
  return (
    <div className="bg-wall-100 w-full">
      <div className="layout max-w-screen-lg hidden md:block px-8 mx-auto">
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-4 items-center">
            {sites.map((site) => (
              <a
                key={site.title}
                className={classNames("text-xs", {
                  "font-bold": ourSite.includes(site.href),
                })}
                href={site.href}
              >
                {site.title}
              </a>
            ))}
            <div className="w-[1px] h-[1.25rem] bg-wall-400" />
            <a className="text-xs" href="https://network.urbit.org">
              Network Explorer
            </a>
          </div>
        <DocSearch
          appId="3EVOAL3MOI"
          apiKey="00ccef825c17a672ef1c1a9bea3a9903"
          indexName="developers-urbit"
        />
        </div>
      </div>
    </div>
  );
}

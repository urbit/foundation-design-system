import Link from "next/link";
import SingleColumn from "../SingleColumn";
import Section from "../Section";
import React from "react";

export default function Footer({ title = "", data = [[{}], [{}]] }) {
  return (
    <footer className="bg-wall-100 mt-20 w-full flex justify-center z-10">
      <SingleColumn>
        <Section short className="flex flex-row flex-wrap">
          {data?.[0]?.map((section, i) => {
            return (
              <>
                {i === 0 && <h3 className="mt-12 text-2xl w-full">~</h3>}
                <div key={i} className="w-1/2 md:w-1/3 flex flex-col shrink">
                  {section?.title && (
                    <h4 className="mt-10 h-8 font-bold text-base">
                      {section.title}
                    </h4>
                  )}
                  {section.links.map((link) => {
                    return (
                      <Link key={link.href} href={link.href} passHref>
                        <a className="type-medium text-wall-600 pb-1">
                          {link.title}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </>
            );
          })}
        </Section>
        <Section className="flex flex-col md:flex-row">
          {data?.[1]?.map((link) => {
            return (
              <div key={link.href} className="md:w-1/3">
                <Link href={link.href} passHref>
                  <a className="type-medium text-wall-600">{link.title}</a>
                </Link>
              </div>
            );
          })}
        </Section>
      </SingleColumn>
    </footer>
  );
}

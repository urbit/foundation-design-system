import Link from "next/link";
import SingleColumn from "./SingleColumn";
import Section from "./Section";
import React from "react";

export function Footer({ data }) {
  return (
    <footer className="bg-wall-100 mt-20 w-full flex justify-center">
      <SingleColumn>
        <Section short className="flex flex-row flex-wrap">
          {data[0].map((section) => {
            return (
              <div className="w-1/2 md:w-1/3 flex flex-col shrink">
                <h4 className="mt-16 mb-8">{section.title}</h4>
                {section.links.map((link) => {
                  return (
                    <Link href={link.href} passHref>
                      <a className="type-medium text-wall-500">{link.title}</a>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </Section>
        <Section className="flex flex-col md:flex-row">
          {data[1].map((link) => {
            return (
              <div className="md:w-1/3">
                <Link href={link.href} passHref>
                  <a className="type-medium text-wall-500">{link.title}</a>
                </Link>
              </div>
            );
          })}
        </Section>
      </SingleColumn>
    </footer>
  );
}

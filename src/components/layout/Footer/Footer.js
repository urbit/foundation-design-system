import Link from "next/link";
import SingleColumn from "../SingleColumn";
import Section from "../Section";
import React from "react";

export default function Footer({ title = "", data = [[{}], [{}]] }) {
  return (
    <footer className="bg-wall-100 mt-20 w-full flex justify-center">
      {title && (
        <h3
          className="layout text-2xl font-semibold px-8 pt-8"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      <SingleColumn>
        <Section short className="flex flex-row flex-wrap">
          {data?.[0]?.map((section) => {
            return (
              <div
                key={section.title}
                className="w-1/2 md:w-1/3 flex flex-col shrink"
              >
                <h4 className="mt-16 mb-8">{section.title}</h4>
                {section.links.map((link) => {
                  return (
                    <Link key={link.href} href={link.href} passHref>
                      <a className="type-medium text-wall-500">{link.title}</a>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </Section>
        <Section className="flex flex-col md:flex-row">
          {data?.[1]?.map((link) => {
            return (
              <div key={link.href} className="md:w-1/3">
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

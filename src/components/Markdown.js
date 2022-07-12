import React from "react";
import { useCopyToClipboard } from "../lib/hooks";
import Copy from "../lib/icons/copy";
import Link from "next/link";
import Markdoc, { Ast, Tag } from "@markdoc/markdoc";
import { heading } from "../schema/heading.markdoc.js";
import { footnoteRef } from "../schema/footnoteRef.markdoc.js";
import { footnoteItem } from "../schema/footnoteItem.markdoc.js";
import { link } from "../schema/link.markdoc.js";
import { image } from "../schema/image.markdoc.js";
import { sup } from "../schema/superscript.markdoc.js";
import Tabs from "./markdown/Tabs";
import Tab from "./markdown/Tab";
import Button from "./markdown/Button";
import Callout from "./markdown/Callout";
import Highlight, { defaultProps } from "prism-react-renderer";
import parse from "html-react-parser";
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-hoon");

export function Fence({ children, language, copy = false }) {
  const [copyStatus, useCopy] = useCopyToClipboard(children);
  const [showCopy, setShowCopy] = React.useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => setShowCopy(false)}
    >
      {copy && showCopy && (
        <div
          className="absolute flex items-center justify-center top-4 right-5 z-10 cursor-pointer !p-2 border rounded-xl border-[#afaeab]"
          onClick={useCopy}
        >
          <p>
            {copyStatus === "inactive" ? (
              <Copy />
            ) : (
              <svg
                width="21"
                height="21"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.54325 11.4247L12.1498 5.66647L11.3169 5.00013L7.39013 9.90859L4.60812 7.59025L3.92526 8.40969L7.54325 11.4247Z"
                  fill="#afaeab"
                />
              </svg>
            )}
          </p>
        </div>
      )}
      <Highlight
        {...defaultProps}
        key={language}
        language={language}
        code={children}
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.slice(0, -1).map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

const fence = {
  render: "Fence",
  attributes: {
    language: {
      type: String,
      description:
        "The programming language of the code block. Place it after the backticks.",
    },
    copy: {
      type: Boolean,
      description: "Adds a copy button.",
    },
  },
};

const tab = {
  render: "Tab",
  attributes: {
    label: {
      type: String,
    },
  },
};

const tabs = {
  render: "Tabs",
  attributes: {},
  transform(node, config) {
    const labels = node
      .transformChildren(config)
      .filter((child) => child && child.name === "Tab")
      .map((tab) => (typeof tab === "object" ? tab.attributes.label : null));

    return new Tag(this.render, { labels }, node.transformChildren(config));
  },
};

const button = {
  render: "Button",
  attributes: {
    label: {
      type: String,
    },
    link: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};

const callout = {
  render: "Callout",
  attributes: {
    title: {
      type: String,
    },
  },
};

const customFence = {
  render: "CustomFence",
  attributes: {},
};

const html = {
  render: "RenderHtml",
  attributes: {
    content: {
      type: String,
    },
  },
  transform(node) {
    return node.attributes.content
      ? new Tag("RenderHtml", { content: node.attributes.content }, [
          node.inline,
        ])
      : null;
  },
};

const RenderHtml = ({ content }) => {
  return parse(content);
};

const superscript = ({ children }) => <sup>{children}</sup>;

const CustomFence = ({ children }) => <pre>{children}</pre>;

const NextLink = ({ href, target, children }) => {
  return (
    <Link href={href} passHref>
      <a target={target}>{children}</a>
    </Link>
  );
};

export function MarkdownParse({ post }) {
  const tokeniser = new Markdoc.Tokenizer({ html: true, linkify: true });
  const tokens = tokeniser.tokenize(post.content);
  const ast = Markdoc.parse(tokens);
  const finalAst = footnoteParse(ast);
  return Markdoc.transform(finalAst, {
    nodes: {
      fence,
      heading,
      image,
      link,
      footnoteItem,
      footnoteRef,
      html,
      sup,
    },
    tags: {
      tabs,
      tab,
      button,
      callout,
      customFence,
      RenderHtml,
      superscript,
      NextLink,
    },
  });
}

export function MarkdownRender({ content }) {
  return Markdoc.renderers.react(content, React, {
    components: {
      Fence,
      Tabs,
      Tab,
      Button,
      Callout,
      CustomFence,
      RenderHtml,
      NextLink,
    },
  });
}

const footnoteParse = (partialAst) => {
  const endNotePattern = /\[\^(\d+)\]:\s/m;
  const inlineFnPattern = /\[\^(\d+)\](?!:)/gm;

  function* getFootnoteItemNodes(nodes) {
    let results = [];
    let itemsProcessed = 0;
    for (const n of nodes) {
      itemsProcessed += 1;
      if (n.type !== "softbreak") results.push(n);
      if (n.type === "softbreak" || itemsProcessed === nodes.length) {
        yield results;
        results = [];
      }
    }
  }

  function findFootnoteContainerNode(ast) {
    const generator = ast.walk();
    let container;
    let match = false;
    for (const node of generator) {
      if (
        node.attributes.content &&
        endNotePattern.test(node.attributes.content)
      ) {
        match = true;
        generator.return();
      }
      if (node.type === "inline") container = node;
    }
    return match ? container : undefined;
  }

  function processFootnotes(ast) {
    // Get a refrence to the node containing endNotes; if not present, early return
    const fnContainerNode = findFootnoteContainerNode(ast);
    if (!fnContainerNode) return;
    // We have footnotes, so create a new list node which will contain the list of endNotes
    const fnList = new Ast.Node("list", {
      ordered: true,
      class: "footnotes",
    });
    // Get the children nodes for each footnote item
    const fnItems = getFootnoteItemNodes(fnContainerNode.children);
    for (const fn of fnItems) {
      const token = endNotePattern.exec(fn[0].attributes.content);
      if (token) {
        // Remove the markdown footnote syntax (e.g. [^1]) from the string
        fn[0].attributes.content = fn[0].attributes.content.replace(
          token[0],
          ""
        );
        // Create a new footnote item and append to the fnList
        const id = token[1];
        const fnItem = new Ast.Node(
          "footnoteItem",
          {
            id: `fn${id}`,
            href: `#fnref${id}`,
          },
          fn
        );
        fnList.push(fnItem);
      }
    }
    ast.children.pop(); // remove the last paragraph in the doc being replaced by the fnList
    ast.push(fnList);
  }

  function processFootnoteRefs(ast) {
    let parent = ast;
    for (const node of ast.walk()) {
      if (node.attributes.content) {
        // Check if there's a footnote ref token
        const token = inlineFnPattern.exec(node.attributes.content);
        if (token) {
          // Break the string where the foonote ref is, assign first part of string to the current node content
          const [prevText, nextText] = node.attributes.content.split(token[0]);
          node.attributes.content = prevText;

          // Create a footnote node and insert it in the tree
          const id = token[1];
          const fn = new Ast.Node("footnoteRef", {
            id: `fnref${id}`,
            href: `#fn${id}`,
            label: `${id}`,
          });
          parent.push(fn);

          // Create a text node for the text which follows after the footnote and insert it in the tree
          const next = new Ast.Node("text", { content: nextText });
          parent.push(next);
        }
      }
      // If the node is of inline type, update parent
      if (node.type == "inline") parent = node;
    }
  }

  processFootnoteRefs(partialAst);
  processFootnotes(partialAst);
  return partialAst;
};

const Markdown = {
  parse: MarkdownParse,
  render: MarkdownRender,
};

export default Markdown;

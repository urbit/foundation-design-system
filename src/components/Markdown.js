import React from "react";
import Link from "next/link";
import Markdoc, { Ast, Tag } from "@urbit/markdoc";
import { heading } from "../schema/heading.markdoc.js";
import { footnoteRef } from "../schema/footnoteRef.markdoc.js";
import { footnoteItem } from "../schema/footnoteItem.markdoc.js";
import { link } from "../schema/link.markdoc.js";
import { image } from "../schema/image.markdoc.js";
import { sup } from "../schema/superscript.markdoc.js";
import { fence } from "../schema/fence.markdoc";
import { tab, tabs } from "../schema/tabs.markdoc";
import { html } from "../schema/html.markdoc";
import { button } from "../schema/button.markdoc";
import { callout } from "../schema/callout.markdoc";
import { div } from "../schema/div.markdoc";
import { iframe } from "../schema/iframe.markdoc";
import Tabs from "./markdown/Tabs";
import Tab from "./markdown/Tab";
import Button from "./markdown/Button";
import Callout from "./markdown/Callout";
import Fence from "./markdown/Fence.js";
import parse from "html-react-parser";

const RenderHtml = ({ content }) => {
  return parse(content);
};

const superscript = ({ children }) => <sup>{children}</sup>;

const NextLink = ({ href, target, children }) => {
  return (
    <Link href={href} passHref>
      <a target={target}>{children}</a>
    </Link>
  );
};

const Div = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const Iframe = ({ className, width, height, src, children }) => {
  return <iframe width={width} height={height} src={src} />;
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
      RenderHtml,
      superscript,
      NextLink,
      div,
      iframe,
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
      RenderHtml,
      NextLink,
      Div,
      Iframe,
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

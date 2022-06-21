'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Link = require('next/link');
var classnames = require('classnames');
var Markdoc = require('@markdoc/markdoc');
var Highlight = require('prism-react-renderer');
var parse = require('html-react-parser');
var Prism = require('prism-react-renderer/prism');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Link__default = /*#__PURE__*/_interopDefaultLegacy(Link);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var Markdoc__default = /*#__PURE__*/_interopDefaultLegacy(Markdoc);
var Highlight__default = /*#__PURE__*/_interopDefaultLegacy(Highlight);
var parse__default = /*#__PURE__*/_interopDefaultLegacy(parse);
var Prism__default = /*#__PURE__*/_interopDefaultLegacy(Prism);

function Container({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col min-h-screen w-screen max-w-full items-center"
  }, children);
}

function SingleColumn({
  children
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col w-full items-center max-w-screen-2xl"
  }, children);
}

function Section({
  children,
  className = "",
  short = false,
  narrow = false
}) {
  const spacing = classnames__default["default"]({
    "py-8": short,
    "py-20": !short,
    "layout-narrow": narrow,
    layout: !narrow
  });
  return /*#__PURE__*/React__default["default"].createElement("section", {
    className: `w-full px-4 md:px-8 ${spacing} ${className}`
  }, children);
}

function Footer({
  data = [[{}], [{}]]
}) {
  return /*#__PURE__*/React__default["default"].createElement("footer", {
    className: "bg-wall-100 mt-20 w-full flex justify-center"
  }, /*#__PURE__*/React__default["default"].createElement(SingleColumn, null, /*#__PURE__*/React__default["default"].createElement(Section, {
    short: true,
    className: "flex flex-row flex-wrap"
  }, data?.[0]?.map(section => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: section.title,
      className: "w-1/2 md:w-1/3 flex flex-col shrink"
    }, /*#__PURE__*/React__default["default"].createElement("h4", {
      className: "mt-16 mb-8"
    }, section.title), section.links.map(link => {
      return /*#__PURE__*/React__default["default"].createElement(Link__default["default"], {
        key: link.href,
        href: link.href,
        passHref: true
      }, /*#__PURE__*/React__default["default"].createElement("a", {
        className: "type-medium text-wall-500"
      }, link.title));
    }));
  })), /*#__PURE__*/React__default["default"].createElement(Section, {
    className: "flex flex-col md:flex-row"
  }, data?.[1]?.map(link => {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: link.href,
      className: "md:w-1/3"
    }, /*#__PURE__*/React__default["default"].createElement(Link__default["default"], {
      href: link.href,
      passHref: true
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      className: "type-medium text-wall-500"
    }, link.title)));
  }))));
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }

  const bottomChildren = children.map(child => child.children ? child.children : child).flat();
  return bottomChildren.filter(child => typeof child === "string").join(" ").replace(/[=?!><:;,+#^|$&~"*@\.%/]/g, "").replace(/\s+/g, "-").toLowerCase();
}

const heading = {
  children: ["inline"],
  attributes: {
    id: {
      type: String
    },
    level: {
      type: Number,
      required: true,
      default: 1
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);
    return new Markdoc.Tag(`h${node.attributes["level"]}`, { ...attributes,
      id
    }, children);
  }

};

const footnoteRef = {
  attributes: {
    id: {
      type: String,
      render: true,
      required: true
    },
    href: {
      type: String,
      render: true,
      required: true
    },
    label: {
      type: String,
      render: false,
      required: true
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const link = new Markdoc.Tag("a", attributes, [`${node.attributes.label}`]);
    return new Markdoc.Tag(`sup`, {
      class: "footnote-ref"
    }, [link]);
  }

};

const footnoteItem = {
  attributes: {
    id: {
      type: String,
      render: true,
      required: true
    },
    href: {
      type: String,
      render: false,
      required: true
    }
  },

  transform(node, config) {
    node.attributes.class = `footnote-item`;
    const anchor = new Markdoc.Ast.Node("link", {
      class: "footnote-anchor",
      href: node.attributes.href
    }, [new Markdoc.Ast.Node("text", {
      content: "↩"
    })]);
    node.push(anchor);
    return new Markdoc.Tag("li", node.transformAttributes(config), node.transformChildren(config));
  }

};

function checkIfExternal(attributes) {
  const href = attributes.href;

  if (href.includes("urbit.org") || href.startsWith("/") || href.startsWith("#") || href.startsWith("?")) {
    return "_self";
  } else {
    return "_blank";
  }
}

const link = {
  render: "NextLink",
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    target: {
      type: String
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const target = checkIfExternal(attributes);
    return new Markdoc.Tag("NextLink", { ...attributes,
      target
    }, children);
  }

};

const image = {
  render: "span",
  attributes: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    title: {
      type: String
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const imageTag = new Markdoc.Tag("img", attributes, children);
    return new Markdoc.Tag("span", {
      id: "figure"
    }, [imageTag]);
  }

};

const sup = {
  render: "superscript",
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {},

  transform(node, config) {
    return new Markdoc.Tag(`sup`, node.transformAttributes(config), node.transformChildren(config));
  }

};

const TabContext = /*#__PURE__*/React__default["default"].createContext();

const Tabs = ({
  labels,
  children
}) => {
  const [currentTab, setCurrentTab] = React__default["default"].useState(labels[0]);
  return /*#__PURE__*/React__default["default"].createElement(TabContext.Provider, {
    value: currentTab
  }, /*#__PURE__*/React__default["default"].createElement("ul", {
    className: "flex items-center display cursor-pointer space-x-4"
  }, labels.map(label => /*#__PURE__*/React__default["default"].createElement("li", {
    className: "block bg-wall-100 tab rounded-xl " + (currentTab === label ? "font-semibold" : ""),
    key: label,
    onClick: () => setCurrentTab(label)
  }, label))), children);
};

const Tab = ({
  label,
  children
}) => {
  const currentTab = React__default["default"].useContext(TabContext);

  if (label !== currentTab) {
    return null;
  }

  return children;
};

const Button = ({
  label,
  link,
  color
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Link__default["default"], {
    passHref: true,
    href: link
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    className: "button-lg max-w-fit " + color
  }, label));
};

const Callout = ({
  title,
  children
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "bg-wall-100 rounded-xl display p-7 flex flex-col space-y-4"
  }, title && /*#__PURE__*/React__default["default"].createElement("h2", null, title), children);
};

(typeof global !== "undefined" ? global : window).Prism = Prism__default["default"];

require("prismjs/components/prism-hoon");

function Fence({
  children,
  language
}) {
  return /*#__PURE__*/React__default["default"].createElement(Highlight__default["default"], _extends({}, Highlight.defaultProps, {
    key: language,
    language: language,
    code: children,
    theme: undefined
  }), ({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps
  }) => /*#__PURE__*/React__default["default"].createElement("pre", {
    className: className,
    style: style
  }, tokens.slice(0, -1).map((line, i) => /*#__PURE__*/React__default["default"].createElement("div", getLineProps({
    line,
    key: i
  }), line.map((token, key) => /*#__PURE__*/React__default["default"].createElement("span", getTokenProps({
    token,
    key
  })))))));
}
const fence = {
  render: "Fence",
  attributes: {
    language: {
      type: String,
      description: "The programming language of the code block. Place it after the backticks."
    }
  }
};
const tab = {
  render: "Tab",
  attributes: {
    label: {
      type: String
    }
  }
};
const tabs = {
  render: "Tabs",
  attributes: {},

  transform(node, config) {
    const labels = node.transformChildren(config).filter(child => child && child.name === "Tab").map(tab => typeof tab === "object" ? tab.attributes.label : null);
    return new Markdoc.Tag(this.render, {
      labels
    }, node.transformChildren(config));
  }

};
const button = {
  render: "Button",
  attributes: {
    label: {
      type: String
    },
    link: {
      type: String
    },
    color: {
      type: String
    }
  }
};
const callout = {
  render: "Callout",
  attributes: {
    title: {
      type: String
    }
  }
};
const customFence = {
  render: "CustomFence",
  attributes: {}
};
const html = {
  render: "RenderHtml",
  attributes: {
    content: {
      type: String
    }
  },

  transform(node) {
    return node.attributes.content ? new Markdoc.Tag("RenderHtml", {
      content: node.attributes.content
    }, [node.inline]) : null;
  }

};

const RenderHtml = ({
  content
}) => {
  return parse__default["default"](content);
};

const superscript = ({
  children
}) => /*#__PURE__*/React__default["default"].createElement("sup", null, children);

const CustomFence = ({
  children
}) => /*#__PURE__*/React__default["default"].createElement("pre", null, children);

const NextLink = ({
  href,
  target,
  children
}) => {
  return /*#__PURE__*/React__default["default"].createElement(Link__default["default"], {
    href: href,
    passHref: true
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    target: target
  }, children));
};

function MarkdownParse({
  post
}) {
  const tokeniser = new Markdoc__default["default"].Tokenizer({
    html: true,
    linkify: true
  });
  const tokens = tokeniser.tokenize(post.content);
  const ast = Markdoc__default["default"].parse(tokens);
  const finalAst = footnoteParse(ast);
  return Markdoc__default["default"].transform(finalAst, {
    nodes: {
      fence,
      heading,
      image,
      link,
      footnoteItem,
      footnoteRef,
      html,
      sup
    },
    tags: {
      tabs,
      tab,
      button,
      callout,
      customFence,
      RenderHtml,
      superscript,
      NextLink
    }
  });
}
function MarkdownRender({
  content
}) {
  return Markdoc__default["default"].renderers.react(content, React__default["default"], {
    components: {
      Fence,
      Tabs,
      Tab,
      Button,
      Callout,
      CustomFence,
      RenderHtml,
      NextLink
    }
  });
}

const footnoteParse = partialAst => {
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
      if (node.attributes.content && endNotePattern.test(node.attributes.content)) {
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
    if (!fnContainerNode) return; // We have footnotes, so create a new list node which will contain the list of endNotes

    const fnList = new Markdoc.Ast.Node("list", {
      ordered: true,
      class: "footnotes"
    }); // Get the children nodes for each footnote item

    const fnItems = getFootnoteItemNodes(fnContainerNode.children);

    for (const fn of fnItems) {
      const token = endNotePattern.exec(fn[0].attributes.content);

      if (token) {
        // Remove the markdown footnote syntax (e.g. [^1]) from the string
        fn[0].attributes.content = fn[0].attributes.content.replace(token[0], ""); // Create a new footnote item and append to the fnList

        const id = token[1];
        const fnItem = new Markdoc.Ast.Node("footnoteItem", {
          id: `fn${id}`,
          href: `#fnref${id}`
        }, fn);
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
          node.attributes.content = prevText; // Create a footnote node and insert it in the tree

          const id = token[1];
          const fn = new Markdoc.Ast.Node("footnoteRef", {
            id: `fnref${id}`,
            href: `#fn${id}`,
            label: `${id}`
          });
          parent.push(fn); // Create a text node for the text which follows after the footnote and insert it in the tree

          const next = new Markdoc.Ast.Node("text", {
            content: nextText
          });
          parent.push(next);
        }
      } // If the node is of inline type, update parent


      if (node.type == "inline") parent = node;
    }
  }

  processFootnoteRefs(partialAst);
  processFootnotes(partialAst);
  return partialAst;
};

const Markdown = {
  parse: MarkdownParse,
  render: MarkdownRender
};

exports.Container = Container;
exports.Footer = Footer;
exports.Markdown = Markdown;
exports.Section = Section;
exports.SingleColumn = SingleColumn;
//# sourceMappingURL=index.js.map

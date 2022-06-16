"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fence = Fence;
exports.MarkdownParse = MarkdownParse;
exports.MarkdownRender = MarkdownRender;
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var _markdoc = _interopRequireWildcard(require("@markdoc/markdoc"));

var _headingMarkdoc = require("../schema/heading.markdoc.js");

var _footnoteRefMarkdoc = require("../schema/footnoteRef.markdoc.js");

var _footnoteItemMarkdoc = require("../schema/footnoteItem.markdoc.js");

var _linkMarkdoc = require("../schema/link.markdoc.js");

var _imageMarkdoc = require("../schema/image.markdoc.js");

var _superscriptMarkdoc = require("../schema/superscript.markdoc.js");

var _Tabs = _interopRequireDefault(require("./markdown/Tabs"));

var _Tab = _interopRequireDefault(require("./markdown/Tab"));

var _Button = _interopRequireDefault(require("./markdown/Button"));

var _Callout = _interopRequireDefault(require("./markdown/Callout"));

var _prismReactRenderer = _interopRequireWildcard(require("prism-react-renderer"));

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var _prism = _interopRequireDefault(require("prism-react-renderer/prism"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

(typeof global !== "undefined" ? global : window).Prism = _prism.default;

require("prismjs/components/prism-hoon");

function Fence(_ref) {
  let {
    children,
    language
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_prismReactRenderer.default, _extends({}, _prismReactRenderer.defaultProps, {
    key: language,
    language: language,
    code: children,
    theme: undefined
  }), _ref2 => {
    let {
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("pre", {
      className: className,
      style: style
    }, tokens.slice(0, -1).map((line, i) => /*#__PURE__*/_react.default.createElement("div", getLineProps({
      line,
      key: i
    }), line.map((token, key) => /*#__PURE__*/_react.default.createElement("span", getTokenProps({
      token,
      key
    }))))));
  });
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
    return new _markdoc.Tag(this.render, {
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
    return node.attributes.content ? new _markdoc.Tag("RenderHtml", {
      content: node.attributes.content
    }, [node.inline]) : null;
  }

};

const RenderHtml = _ref3 => {
  let {
    content
  } = _ref3;
  return (0, _htmlReactParser.default)(content);
};

const superscript = _ref4 => {
  let {
    children
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("sup", null, children);
};

const CustomFence = _ref5 => {
  let {
    children
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("pre", null, children);
};

const NextLink = _ref6 => {
  let {
    href,
    target,
    children
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement(_link.default, {
    href: href,
    passHref: true
  }, /*#__PURE__*/_react.default.createElement("a", {
    target: target
  }, children));
};

function MarkdownParse(_ref7) {
  let {
    post
  } = _ref7;
  const tokeniser = new _markdoc.default.Tokenizer({
    html: true,
    linkify: true
  });
  const tokens = tokeniser.tokenize(post.content);

  const ast = _markdoc.default.parse(tokens);

  const finalAst = footnoteParse(ast);
  return _markdoc.default.transform(finalAst, {
    nodes: {
      fence,
      heading: _headingMarkdoc.heading,
      image: _imageMarkdoc.image,
      link: _linkMarkdoc.link,
      footnoteItem: _footnoteItemMarkdoc.footnoteItem,
      footnoteRef: _footnoteRefMarkdoc.footnoteRef,
      html,
      sup: _superscriptMarkdoc.sup
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

function MarkdownRender(_ref8) {
  let {
    content
  } = _ref8;
  return _markdoc.default.renderers.react(content, _react.default, {
    components: {
      Fence,
      Tabs: _Tabs.default,
      Tab: _Tab.default,
      Button: _Button.default,
      Callout: _Callout.default,
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

    const fnList = new _markdoc.Ast.Node("list", {
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
        const fnItem = new _markdoc.Ast.Node("footnoteItem", {
          id: "fn".concat(id),
          href: "#fnref".concat(id)
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
          const fn = new _markdoc.Ast.Node("footnoteRef", {
            id: "fnref".concat(id),
            href: "#fn".concat(id),
            label: "".concat(id)
          });
          parent.push(fn); // Create a text node for the text which follows after the footnote and insert it in the tree

          const next = new _markdoc.Ast.Node("text", {
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
var _default = Markdown;
exports.default = _default;
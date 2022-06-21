"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fence = Fence;
exports.MarkdownParse = MarkdownParse;
exports.MarkdownRender = MarkdownRender;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __jsx = _react["default"].createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(typeof global !== "undefined" ? global : window).Prism = _prism["default"];

require("prismjs/components/prism-hoon");

function Fence(_ref) {
  var children = _ref.children,
      language = _ref.language;
  return /*#__PURE__*/_react["default"].createElement(_prismReactRenderer["default"], (0, _extends2["default"])({}, _prismReactRenderer.defaultProps, {
    key: language,
    language: language,
    code: children,
    theme: undefined
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return /*#__PURE__*/_react["default"].createElement("pre", {
      className: className,
      style: style
    }, tokens.slice(0, -1).map(function (line, i) {
      return /*#__PURE__*/_react["default"].createElement("div", getLineProps({
        line: line,
        key: i
      }), line.map(function (token, key) {
        return /*#__PURE__*/_react["default"].createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }));
    }));
  });
}

var fence = {
  render: "Fence",
  attributes: {
    language: {
      type: String,
      description: "The programming language of the code block. Place it after the backticks."
    }
  }
};
var tab = {
  render: "Tab",
  attributes: {
    label: {
      type: String
    }
  }
};
var tabs = {
  render: "Tabs",
  attributes: {},
  transform: function transform(node, config) {
    var labels = node.transformChildren(config).filter(function (child) {
      return child && child.name === "Tab";
    }).map(function (tab) {
      return typeof tab === "object" ? tab.attributes.label : null;
    });
    return new _markdoc.Tag(this.render, {
      labels: labels
    }, node.transformChildren(config));
  }
};
var button = {
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
var callout = {
  render: "Callout",
  attributes: {
    title: {
      type: String
    }
  }
};
var customFence = {
  render: "CustomFence",
  attributes: {}
};
var html = {
  render: "RenderHtml",
  attributes: {
    content: {
      type: String
    }
  },
  transform: function transform(node) {
    return node.attributes.content ? new _markdoc.Tag("RenderHtml", {
      content: node.attributes.content
    }, [node.inline]) : null;
  }
};

var RenderHtml = function RenderHtml(_ref3) {
  var content = _ref3.content;
  return (0, _htmlReactParser["default"])(content);
};

var superscript = function superscript(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement("sup", null, children);
};

var CustomFence = function CustomFence(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/_react["default"].createElement("pre", null, children);
};

var NextLink = function NextLink(_ref6) {
  var href = _ref6.href,
      target = _ref6.target,
      children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: href,
    passHref: true
  }, /*#__PURE__*/_react["default"].createElement("a", {
    target: target
  }, children));
};

function MarkdownParse(_ref7) {
  var post = _ref7.post;
  var tokeniser = new _markdoc["default"].Tokenizer({
    html: true,
    linkify: true
  });
  var tokens = tokeniser.tokenize(post.content);

  var ast = _markdoc["default"].parse(tokens);

  var finalAst = footnoteParse(ast);
  return _markdoc["default"].transform(finalAst, {
    nodes: {
      fence: fence,
      heading: _headingMarkdoc.heading,
      image: _imageMarkdoc.image,
      link: _linkMarkdoc.link,
      footnoteItem: _footnoteItemMarkdoc.footnoteItem,
      footnoteRef: _footnoteRefMarkdoc.footnoteRef,
      html: html,
      sup: _superscriptMarkdoc.sup
    },
    tags: {
      tabs: tabs,
      tab: tab,
      button: button,
      callout: callout,
      customFence: customFence,
      RenderHtml: RenderHtml,
      superscript: superscript,
      NextLink: NextLink
    }
  });
}

function MarkdownRender(_ref8) {
  var content = _ref8.content;
  return _markdoc["default"].renderers.react(content, _react["default"], {
    components: {
      Fence: Fence,
      Tabs: _Tabs["default"],
      Tab: _Tab["default"],
      Button: _Button["default"],
      Callout: _Callout["default"],
      CustomFence: CustomFence,
      RenderHtml: RenderHtml,
      NextLink: NextLink
    }
  });
}

var footnoteParse = function footnoteParse(partialAst) {
  var _marked = /*#__PURE__*/_regenerator["default"].mark(getFootnoteItemNodes);

  var endNotePattern = /\[\^(\d+)\]:\s/m;
  var inlineFnPattern = /\[\^(\d+)\](?!:)/gm;

  function getFootnoteItemNodes(nodes) {
    var results, itemsProcessed, _iterator, _step, n;

    return _regenerator["default"].wrap(function getFootnoteItemNodes$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            results = [];
            itemsProcessed = 0;
            _iterator = _createForOfIteratorHelper(nodes);
            _context.prev = 3;

            _iterator.s();

          case 5:
            if ((_step = _iterator.n()).done) {
              _context.next = 15;
              break;
            }

            n = _step.value;
            itemsProcessed += 1;
            if (n.type !== "softbreak") results.push(n);

            if (!(n.type === "softbreak" || itemsProcessed === nodes.length)) {
              _context.next = 13;
              break;
            }

            _context.next = 12;
            return results;

          case 12:
            results = [];

          case 13:
            _context.next = 5;
            break;

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](3);

            _iterator.e(_context.t0);

          case 20:
            _context.prev = 20;

            _iterator.f();

            return _context.finish(20);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, null, [[3, 17, 20, 23]]);
  }

  function findFootnoteContainerNode(ast) {
    var generator = ast.walk();
    var container;
    var match = false;

    var _iterator2 = _createForOfIteratorHelper(generator),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var node = _step2.value;

        if (node.attributes.content && endNotePattern.test(node.attributes.content)) {
          match = true;
          generator["return"]();
        }

        if (node.type === "inline") container = node;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return match ? container : undefined;
  }

  function processFootnotes(ast) {
    // Get a refrence to the node containing endNotes; if not present, early return
    var fnContainerNode = findFootnoteContainerNode(ast);
    if (!fnContainerNode) return; // We have footnotes, so create a new list node which will contain the list of endNotes

    var fnList = new _markdoc.Ast.Node("list", {
      ordered: true,
      "class": "footnotes"
    }); // Get the children nodes for each footnote item

    var fnItems = getFootnoteItemNodes(fnContainerNode.children);

    var _iterator3 = _createForOfIteratorHelper(fnItems),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var fn = _step3.value;
        var token = endNotePattern.exec(fn[0].attributes.content);

        if (token) {
          // Remove the markdown footnote syntax (e.g. [^1]) from the string
          fn[0].attributes.content = fn[0].attributes.content.replace(token[0], ""); // Create a new footnote item and append to the fnList

          var id = token[1];
          var fnItem = new _markdoc.Ast.Node("footnoteItem", {
            id: "fn".concat(id),
            href: "#fnref".concat(id)
          }, fn);
          fnList.push(fnItem);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    ast.children.pop(); // remove the last paragraph in the doc being replaced by the fnList

    ast.push(fnList);
  }

  function processFootnoteRefs(ast) {
    var parent = ast;

    var _iterator4 = _createForOfIteratorHelper(ast.walk()),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var node = _step4.value;

        if (node.attributes.content) {
          // Check if there's a footnote ref token
          var token = inlineFnPattern.exec(node.attributes.content);

          if (token) {
            // Break the string where the foonote ref is, assign first part of string to the current node content
            var _node$attributes$cont = node.attributes.content.split(token[0]),
                _node$attributes$cont2 = (0, _slicedToArray2["default"])(_node$attributes$cont, 2),
                prevText = _node$attributes$cont2[0],
                nextText = _node$attributes$cont2[1];

            node.attributes.content = prevText; // Create a footnote node and insert it in the tree

            var id = token[1];
            var fn = new _markdoc.Ast.Node("footnoteRef", {
              id: "fnref".concat(id),
              href: "#fn".concat(id),
              label: "".concat(id)
            });
            parent.push(fn); // Create a text node for the text which follows after the footnote and insert it in the tree

            var next = new _markdoc.Ast.Node("text", {
              content: nextText
            });
            parent.push(next);
          }
        } // If the node is of inline type, update parent


        if (node.type == "inline") parent = node;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  processFootnoteRefs(partialAst);
  processFootnotes(partialAst);
  return partialAst;
};

var Markdown = {
  parse: MarkdownParse,
  render: MarkdownRender
};
var _default = Markdown;
exports["default"] = _default;
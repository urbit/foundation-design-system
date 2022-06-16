"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = void 0;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.string.starts-with.js");

var _markdoc = require("@markdoc/markdoc");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function checkIfExternal(attributes) {
  const href = attributes.href;

  if (href.includes(window.location.hostname) || href.startsWith("/") || href.startsWith("#") || href.startsWith("?")) {
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
    return new _markdoc.Tag("NextLink", _objectSpread(_objectSpread({}, attributes), {}, {
      target
    }), children);
  }

};
exports.link = link;
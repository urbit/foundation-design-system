"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heading = void 0;

require("core-js/modules/es.array.flat.js");

require("core-js/modules/es.array.unscopables.flat.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _markdoc = require("@markdoc/markdoc");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return new _markdoc.Tag("h".concat(node.attributes["level"]), _objectSpread(_objectSpread({}, attributes), {}, {
      id
    }), children);
  }

};
exports.heading = heading;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.heading = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _markdoc = require("@markdoc/markdoc");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }

  var bottomChildren = children.map(function (child) {
    return child.children ? child.children : child;
  }).flat();
  return bottomChildren.filter(function (child) {
    return typeof child === "string";
  }).join(" ").replace(/[=?!><:;,+#^|$&~"*@\.%/]/g, "").replace(/\s+/g, "-").toLowerCase();
}

var heading = {
  children: ["inline"],
  attributes: {
    id: {
      type: String
    },
    level: {
      type: Number,
      required: true,
      "default": 1
    }
  },
  transform: function transform(node, config) {
    var attributes = node.transformAttributes(config);
    var children = node.transformChildren(config);
    var id = generateID(children, attributes);
    return new _markdoc.Tag("h".concat(node.attributes["level"]), _objectSpread(_objectSpread({}, attributes), {}, {
      id: id
    }), children);
  }
};
exports.heading = heading;
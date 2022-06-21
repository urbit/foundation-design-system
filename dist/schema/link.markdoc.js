"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _markdoc = require("@markdoc/markdoc");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function checkIfExternal(attributes) {
  var href = attributes.href;

  if (href.includes("urbit.org") || href.startsWith("/") || href.startsWith("#") || href.startsWith("?")) {
    return "_self";
  } else {
    return "_blank";
  }
}

var link = {
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
  transform: function transform(node, config) {
    var attributes = node.transformAttributes(config);
    var children = node.transformChildren(config);
    var target = checkIfExternal(attributes);
    return new _markdoc.Tag("NextLink", _objectSpread(_objectSpread({}, attributes), {}, {
      target: target
    }), children);
  }
};
exports.link = link;
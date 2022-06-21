"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

var __jsx = _react["default"].createElement;

var Button = function Button(_ref) {
  var label = _ref.label,
      link = _ref.link,
      color = _ref.color;
  return /*#__PURE__*/_react["default"].createElement(_link["default"], {
    passHref: true,
    href: link
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "button-lg max-w-fit " + color
  }, label));
};

var _default = Button;
exports["default"] = _default;
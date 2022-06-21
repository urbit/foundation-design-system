"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Container;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col min-h-screen w-screen max-w-full items-center"
  }, children);
}
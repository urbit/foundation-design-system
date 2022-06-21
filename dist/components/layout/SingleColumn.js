"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SingleColumn;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

function SingleColumn(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col w-full items-center max-w-screen-2xl"
  }, children);
}
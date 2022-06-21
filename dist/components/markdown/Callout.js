"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var Callout = function Callout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-wall-100 rounded-xl display p-7 flex flex-col space-y-4"
  }, title && /*#__PURE__*/_react["default"].createElement("h2", null, title), children);
};

var _default = Callout;
exports["default"] = _default;
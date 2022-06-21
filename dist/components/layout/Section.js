"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Section;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

function Section(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$short = _ref["short"],
      _short = _ref$short === void 0 ? false : _ref$short,
      _ref$narrow = _ref.narrow,
      narrow = _ref$narrow === void 0 ? false : _ref$narrow;

  var spacing = (0, _classnames["default"])({
    "py-8": _short,
    "py-20": !_short,
    "layout-narrow": narrow,
    layout: !narrow
  });
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "w-full px-4 md:px-8 ".concat(spacing, " ").concat(className)
  }, children);
}
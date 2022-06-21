"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Section;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Section(_ref) {
  let {
    children,
    className = "",
    short = false,
    narrow = false
  } = _ref;
  const spacing = (0, _classnames.default)({
    "py-8": short,
    "py-20": !short,
    "layout-narrow": narrow,
    layout: !narrow
  });
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "w-full px-4 md:px-8 ".concat(spacing, " ").concat(className)
  }, children);
}
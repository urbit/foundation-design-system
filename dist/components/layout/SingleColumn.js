"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SingleColumn;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SingleColumn(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col w-full items-center max-w-screen-2xl"
  }, children);
}
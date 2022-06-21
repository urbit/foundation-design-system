"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SingleColumn;

function SingleColumn(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col w-full items-center max-w-screen-2xl"
  }, children);
}
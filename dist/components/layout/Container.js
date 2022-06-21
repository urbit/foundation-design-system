"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Container;

function Container(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col min-h-screen w-screen max-w-full items-center"
  }, children);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Callout = _ref => {
  let {
    title,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-wall-100 rounded-xl display p-7 flex flex-col space-y-4"
  }, title && /*#__PURE__*/_react.default.createElement("h2", null, title), children);
};

var _default = Callout;
exports.default = _default;
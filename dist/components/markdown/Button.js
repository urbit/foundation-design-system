"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = _interopRequireDefault(require("next/link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _ref => {
  let {
    label,
    link,
    color
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_link.default, {
    passHref: true,
    href: link
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "button-lg max-w-fit " + color
  }, label));
};

var _default = Button;
exports.default = _default;
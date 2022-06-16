"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tabs = require("./Tabs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tab = _ref => {
  let {
    label,
    children
  } = _ref;

  const currentTab = _react.default.useContext(_Tabs.TabContext);

  if (label !== currentTab) {
    return null;
  }

  return children;
};

var _default = Tab;
exports.default = _default;
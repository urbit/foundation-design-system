"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tabs = require("./Tabs");

var Tab = function Tab(_ref) {
  var label = _ref.label,
      children = _ref.children;

  var currentTab = _react["default"].useContext(_Tabs.TabContext);

  if (label !== currentTab) {
    return null;
  }

  return children;
};

var _default = Tab;
exports["default"] = _default;
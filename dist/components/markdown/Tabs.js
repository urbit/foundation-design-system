"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TabContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var TabContext = /*#__PURE__*/_react["default"].createContext();

exports.TabContext = TabContext;

var Tabs = function Tabs(_ref) {
  var labels = _ref.labels,
      children = _ref.children;

  var _React$useState = _react["default"].useState(labels[0]),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      currentTab = _React$useState2[0],
      setCurrentTab = _React$useState2[1];

  return /*#__PURE__*/_react["default"].createElement(TabContext.Provider, {
    value: currentTab
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "flex items-center display cursor-pointer space-x-4"
  }, labels.map(function (label) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "block bg-wall-100 tab rounded-xl " + (currentTab === label ? "font-semibold" : ""),
      key: label,
      onClick: function onClick() {
        return setCurrentTab(label);
      }
    }, label);
  })), children);
};

var _default = Tabs;
exports["default"] = _default;
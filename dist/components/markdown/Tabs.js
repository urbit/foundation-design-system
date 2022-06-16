"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabContext = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TabContext = /*#__PURE__*/_react.default.createContext();

exports.TabContext = TabContext;

const Tabs = _ref => {
  let {
    labels,
    children
  } = _ref;

  const [currentTab, setCurrentTab] = _react.default.useState(labels[0]);

  return /*#__PURE__*/_react.default.createElement(TabContext.Provider, {
    value: currentTab
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex items-center display cursor-pointer space-x-4"
  }, labels.map(label => /*#__PURE__*/_react.default.createElement("li", {
    className: "block bg-wall-100 tab rounded-xl " + (currentTab === label ? "font-semibold" : ""),
    key: label,
    onClick: () => setCurrentTab(label)
  }, label))), children);
};

var _default = Tabs;
exports.default = _default;
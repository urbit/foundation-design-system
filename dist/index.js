"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Markdown: true
};
Object.defineProperty(exports, "Markdown", {
  enumerable: true,
  get: function get() {
    return _Markdown.default;
  }
});

var _Markdown = _interopRequireDefault(require("./components/Markdown"));

var _layout = require("./components/layout");

Object.keys(_layout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _layout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _layout[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
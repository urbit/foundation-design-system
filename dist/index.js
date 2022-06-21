"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _layout.Container;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _layout.Footer;
  }
});
Object.defineProperty(exports, "Section", {
  enumerable: true,
  get: function get() {
    return _layout.Section;
  }
});
Object.defineProperty(exports, "SingleColumn", {
  enumerable: true,
  get: function get() {
    return _layout.SingleColumn;
  }
});
exports.default = void 0;

var _Markdown = _interopRequireDefault(require("./components/Markdown"));

var _layout = require("./components/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Markdown.default;
exports.default = _default;
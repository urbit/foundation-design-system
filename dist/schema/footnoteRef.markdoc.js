"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footnoteRef = void 0;

var _markdoc = require("@markdoc/markdoc");

var footnoteRef = {
  attributes: {
    id: {
      type: String,
      render: true,
      required: true
    },
    href: {
      type: String,
      render: true,
      required: true
    },
    label: {
      type: String,
      render: false,
      required: true
    }
  },
  transform: function transform(node, config) {
    var attributes = node.transformAttributes(config);
    var link = new _markdoc.Tag("a", attributes, ["".concat(node.attributes.label)]);
    return new _markdoc.Tag("sup", {
      "class": "footnote-ref"
    }, [link]);
  }
};
exports.footnoteRef = footnoteRef;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.image = void 0;

var _markdoc = require("@markdoc/markdoc");

var image = {
  render: "span",
  attributes: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    title: {
      type: String
    }
  },
  transform: function transform(node, config) {
    var attributes = node.transformAttributes(config);
    var children = node.transformChildren(config);
    var imageTag = new _markdoc.Tag("img", attributes, children);
    return new _markdoc.Tag("span", {
      id: "figure"
    }, [imageTag]);
  }
};
exports.image = image;
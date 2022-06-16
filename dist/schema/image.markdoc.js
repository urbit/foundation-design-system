"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.image = void 0;

var _markdoc = require("@markdoc/markdoc");

const image = {
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

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const imageTag = new _markdoc.Tag("img", attributes, children);
    return new _markdoc.Tag("span", {
      id: "figure"
    }, [imageTag]);
  }

};
exports.image = image;
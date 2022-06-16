"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footnoteItem = void 0;

var _markdoc = require("@markdoc/markdoc");

const footnoteItem = {
  attributes: {
    id: {
      type: String,
      render: true,
      required: true
    },
    href: {
      type: String,
      render: false,
      required: true
    }
  },

  transform(node, config) {
    node.attributes.class = "footnote-item";
    const anchor = new _markdoc.Ast.Node("link", {
      class: "footnote-anchor",
      href: node.attributes.href
    }, [new _markdoc.Ast.Node("text", {
      content: "↩"
    })]);
    node.push(anchor);
    return new _markdoc.Tag("li", node.transformAttributes(config), node.transformChildren(config));
  }

};
exports.footnoteItem = footnoteItem;
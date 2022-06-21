"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footnoteItem = void 0;

var _markdoc = require("@markdoc/markdoc");

var footnoteItem = {
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
  transform: function transform(node, config) {
    node.attributes["class"] = "footnote-item";
    var anchor = new _markdoc.Ast.Node("link", {
      "class": "footnote-anchor",
      href: node.attributes.href
    }, [new _markdoc.Ast.Node("text", {
      content: "↩"
    })]);
    node.push(anchor);
    return new _markdoc.Tag("li", node.transformAttributes(config), node.transformChildren(config));
  }
};
exports.footnoteItem = footnoteItem;
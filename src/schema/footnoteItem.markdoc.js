import { Ast, Tag } from "@urbit/markdoc";

export const footnoteItem = {
  attributes: {
    id: { type: String, render: true, required: true },
    href: { type: String, render: false, required: true },
  },
  transform(node, config) {
    node.attributes.class = `footnote-item`;
    const anchor = new Ast.Node(
      "link",
      { class: "footnote-anchor", href: node.attributes.href },
      [new Ast.Node("text", { content: "↩" })]
    );
    node.push(anchor);
    return new Tag(
      "li",
      node.transformAttributes(config),
      node.transformChildren(config)
    );
  },
};

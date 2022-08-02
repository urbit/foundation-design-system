import { Tag } from "@urbit/markdoc";

export const sup = {
  render: "superscript",
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {},
  transform(node, config) {
    return new Tag(
      `sup`,
      node.transformAttributes(config),
      node.transformChildren(config)
    );
  },
};

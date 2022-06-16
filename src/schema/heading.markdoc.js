import { Tag } from "@markdoc/markdoc";

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }

  const bottomChildren = children
    .map((child) => (child.children ? child.children : child))
    .flat();
  return bottomChildren
    .filter((child) => typeof child === "string")
    .join(" ")
    .replace(/[=?!><:;,+#^|$&~"*@\.%/]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export const heading = {
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    const id = generateID(children, attributes);

    return new Tag(
      `h${node.attributes["level"]}`,
      { ...attributes, id },
      children
    );
  },
};

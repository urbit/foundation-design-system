import { Tag } from "@urbit/markdoc";

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }

  const getBottom = (parent) =>
    parent?.children
      ? getBottom(parent.children)
      : parent[0]?.children
      ? getBottom(parent[0].children)
      : parent;

  const bottomChildren = [
    children
      .map((child) => getBottom(child))
      .flat()
      .join(""),
  ];
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

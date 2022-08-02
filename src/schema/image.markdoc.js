import { Tag } from "@urbit/markdoc";

export const image = {
  render: "span",
  attributes: {
    src: { type: String, required: true },
    alt: { type: String },
    title: { type: String },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const imageTag = new Tag("img", attributes, children);
    return new Tag("span", { id: "figure" }, [imageTag]);
  },
};

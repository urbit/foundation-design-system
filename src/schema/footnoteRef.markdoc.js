import { Tag } from "@urbit/markdoc";

export const footnoteRef = {
  attributes: {
    id: { type: String, render: true, required: true },
    href: { type: String, render: true, required: true },
    label: { type: String, render: false, required: true },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const link = new Tag("a", attributes, [`${node.attributes.label}`]);
    return new Tag(`sup`, { class: "footnote-ref" }, [link]);
  },
};

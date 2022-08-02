import { Tag } from "@urbit/markdoc";
export const html = {
  render: "RenderHtml",
  attributes: {
    content: {
      type: String,
    },
  },
  transform(node) {
    return node.attributes.content
      ? new Tag("RenderHtml", { content: node.attributes.content }, [
          node.inline,
        ])
      : null;
  },
};

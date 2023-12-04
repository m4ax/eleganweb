// contentlayer.config.js
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "date",
      required: true
    },
    updatedAt: {
      type: "date",
      required: true
    },
    image: {
      type: "image",
      required: true
    },
    keywords: {
      type: "object",
      of: { type: "string" },
      required: true
    },
    description: {
      type: "markdown",
      required: true
    },
    isPublished: {
      type: "boolean",
      default: true,
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/topic/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-IXEETYJC.mjs.map

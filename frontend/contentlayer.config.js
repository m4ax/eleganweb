import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    image: {
      type: "image",
      required: true,
    },
    keywords: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    isPublished: {
        type: "boolean",
        default: true,
        required: true,
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/topic/${doc._raw.flattenedPath}`,
    },
  },

}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog],
});

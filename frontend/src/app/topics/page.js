import Blog from "../../../components/blogs/blog";
import { allBlogs } from "../../../.contentlayer/generated/index.mjs";
import { compareDesc, parseISO } from "date-fns";


const index = () => {

  // const sortBlogs = (blogs) => {
  //   return blogs
  //     .slice()
  //     .sort((a, b) =>
  //       compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
  //     );
  // };

  // const recentBlog = sortBlogs(allBlogs).slice(0, 1);

  return (
    <>
      <Blog />
    </>
  );
};

export default index;

import Blog from "../../../components/blogs/blog";
import { allBlogs } from "../../../.contentlayer/generated/index.mjs";
import { compareDesc, parseISO } from "date-fns";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Learn with us | Elegan Topics",
  description: "Learn how to navigate the complexities of data migration with our comprehensive blog. Discover valuable insights, practical tips, and expert advice to streamline your data migration process and achieve success.",
  keywords: ["data migration", "data management", "cloud migration", "data cleansing", "data mapping", "self-serve data migration", "data security", "data governance", "AI-powered migration"]
}


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

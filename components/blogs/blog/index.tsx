import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import HeaderOne from "../../layout/headers/header";
import BlogArea from "./BlogArea";
import { Blog } from '../../../.contentlayer/generated/types'

const Blog = (blogs: Blog[]) => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Blog Page" title="Blog" />
        <BlogArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Blog;

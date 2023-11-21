import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import HeaderOne from "../../layout/headers/header";
import BlogArea from "./BlogArea";

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Useful Topics" title="Topics" />
        <BlogArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Blog;

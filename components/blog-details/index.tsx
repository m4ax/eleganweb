import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import HeaderTwo from "../layout/headers/header-2";
import BlogDetailsArea from "./BlogDetailsArea";
import FooterOne from "../layout/footers/FooterOne";
import { Blog } from '../../.contentlayer/generated/types'
import { allBlogs } from '../../.contentlayer/generated/index.mjs';






const BlogDetails = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title="Blog Details"  title="Blog Details" />
                <BlogDetailsArea />
            </main>
            <FooterOne />
        </>
    );
};

export default BlogDetails;
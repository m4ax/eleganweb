import popular_img_1 from "../../public/assets/img/blog/ins5.jpg";
import popular_img_2 from "../../public/assets/img/blog/ins4.jpg";
import popular_img_3 from "../../public/assets/img/blog/ins3.jpg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { allBlogs } from '../../.contentlayer/generated/index.mjs';
import { compareDesc, parseISO } from "date-fns";






const PopularNewsFeeds = () => {


    const sortBlogs = (blogs) => {
        return blogs
          .slice()
          .sort((a, b) =>
            compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
          );
      };
    
      const recentBlog = sortBlogs(allBlogs).slice(0, 3);

    return (
        <>
            <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                <span className="animate-border"></span>
                <h3 className="widget-title">Recent Posts</h3>
                </div>
                <ul className="recent-posts">
                    {recentBlog.map((item, i)  => 
                        <li key={i}>
                            <div className="widget-posts-image">
                                <Link href="/blog-details"><Image src={item.image.filePath.replace('../public', '')} alt="blog image" width={item.image.width} height={item.image.height} /></Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link href="/blog-details">{item.title}</Link>
                                </h6>
                                <div className="widget-posts-meta">{item.time}</div>
                            </div>
                        </li>                    
                    )} 
                </ul>
            </div>
        </>
    );
};

export default PopularNewsFeeds;
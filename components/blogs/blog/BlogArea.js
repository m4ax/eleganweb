"use client"
import Tags from "../Tags";
import Link from "next/link";
import Image from "next/image";
import AboutMe from "../AboutMe";
import SearchBox from "../SearchBox";
import CategoriesArea from "../CategoriesArea";
import PopularNewsFeeds from "../PopularNewsFeeds";
import SocialLinks from "../../common/social-links";

import instafed_img_1 from "../../../public/assets/img/blog/ins1.jpg";
import instafed_img_2 from "../../../public/assets/img/blog/ins2.jpg";
import instafed_img_3 from "../../../public/assets/img/blog/ins3.jpg";
import instafed_img_4 from "../../../public/assets/img/blog/ins4.jpg";
import instafed_img_5 from "../../../public/assets/img/blog/ins5.jpg";
import instafed_img_6 from "../../../public/assets/img/blog/ins1.jpg";

import banner from "../../../public/assets/img/blog/details/banner.png";
import blog_img_1 from "../../../public/assets/img/blog/b1.jpg";
import blog_img_2 from "../../../public/assets/img/blog/b2.jpg"; 

import {  useState } from "react";

import { allBlogs } from '../../../.contentlayer/generated/Blog/_index.mjs'
import { compareDesc, parseISO } from "date-fns";

// blog content
const blog_content =  [ 
    {
        id: 1, 
        cls: "format-image",
        just_thumb: true,
        img: blog_img_1,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "But there is a downside. Simply running a search for medical blogs.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 2, 
        cls: "format-image",
        just_thumb: true,
        img: blog_img_1,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "But there is a downside. Simply running a search for medical blogs.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
] 

const BlogArea = () => {


    const sortBlogs = (blogs) => {

        return blogs
          .slice()
          .sort((a, b) =>
            compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
          );
      };

    const [sortedBlogs, setSortedBlogs] = useState(() => sortBlogs(allBlogs));

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const paginatedContent = sortedBlogs.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );

      const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const goToPrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
      };


    console.log(sortedBlogs)
    


    return (
        <>
            <section className="blog-area gray-bg pt-120 pb-80">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-8"> 

                        {paginatedContent.map((item, i) =>  

                                <article key={i} className="postbox post format-image mb-40">
                                    {item.image.filePath && 
                                        <div className="postbox__thumb">
                                            <a href="#">
                                            <Image src={item.image.filePath.replace('../public', '')} alt="blog image" width={item.image.width} height={item.image.height} />
                                            </a>
                                        </div> 
                                    }
                                    <div className="postbox__text p-50">
                                        <div className="post-meta mb-15">
                                            <span><i className="far fa-calendar-check"></i> {item.publishedAt.split('T')[0]}</span>
                                         
                                        </div>
                                        <h3 className="blog-title">
                                            <a href={item.url}>{item.title}</a>
                                        </h3>
                                        {/* <div className="post-text mb-20" dangerouslySetInnerHTML={{ __html: item.description.html }}></div> */}
                                        <div className="read-more mt-30">
    <Link href={item.url}>
        <button className="btn btn-2">read more</button>
    </Link>
</div>
                                        
                                    </div>
                               </article>  
                            )} 

                            <article className="postbox post format-quote mb-40">
                                <div className="post-text">
                                <blockquote>
                                    <p>This health blog from NPR takes a fairly broad look at the medical world,.</p>
                                    <footer>- Rosalina Pong</footer>
                                </blockquote>
                                </div>
                            </article>


                            <div className="basic-pagination basic-pagination-2 mb-40">
                                <ul>
                                <li><Link href="#"><i className="fas fa-angle-double-left"></i></Link></li>
                                <li><Link href="#">01</Link></li>
                                <li className="active"><Link href="#">02</Link></li>
                                <li><Link href="#">03</Link></li>
                                <li><Link href="#"><i className="fas fa-ellipsis-h"></i></Link></li>
                                <li><Link href="#"><i className="fas fa-angle-double-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <SearchBox /> 
                        
                            <div className="widget mb-40 p-0 b-0">
                                <div className="banner-widget">
                                <Link href="#"><Image src={banner} alt="elegan-data-migration" /></Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogArea;
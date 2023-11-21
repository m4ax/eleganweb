"use client"

import Link from "next/link";
import Image from "next/image";

import SearchBox from "../SearchBox";


import banner from "../../../public/assets/img/blog/details/banner.png";
import blog_img_1 from "../../../public/assets/img/blog/b1.jpg";


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
    

    const totalPages = Math.ceil(sortedBlogs.length / itemsPerPage);

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
                                        <h3 className="blog-title">
                                            <a href={item.url}>{item.title}</a>
                                        </h3>
                                        <div className="post-text mb-20" dangerouslySetInnerHTML={{ __html: item.description.html }}></div>
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
                                    <p>The Data Migration Market is set to grow to 33.58 billion by 2030.</p>
                                    <footer>- nextmsc</footer>
                                </blockquote>
                                </div>
                            </article>


                            <div className="basic-pagination basic-pagination-2 mb-40">
                <ul>
                    {/* Previous Page Button */}
                    <li>
                        <a onClick={goToPrevPage}>
                            <i className="fas fa-angle-double-left"></i>
                        </a>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={index === currentPage ? 'active' : ''}>
                            <a onClick={() => setCurrentPage(index)}>{index + 1}</a>
                        </li>
                    ))}

                    {/* Next Page Button */}
                    <li>
                        <a onClick={goToNextPage}>
                            <i className="fas fa-angle-double-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
                        </div>

                        <div className="col-lg-4">
                            <SearchBox /> 

                            <article className="postbox post format-quote mb-40">
                                <div className="post-text">
                                <blockquote>

                                    <p>Inadequacies of Legacy Systems Instigate Momentum in Digital Transformation. Consequently, the Data Migration sector is estimated to grow at a CAGR of 16.8% over the analysis period 2022-2030.</p>
                                    <footer>- Yahoo Finance</footer>
                                </blockquote>
                                <blockquote>
                                    <p>Over 80% of data migration projects run over time and/or over budget. Cost overruns average 30%. Time overruns average 41%.</p>
                                    <footer>- Bloor Group</footer>
                                </blockquote>
                                
                                </div>
                            </article>
                            
                        </div>
                        
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogArea;
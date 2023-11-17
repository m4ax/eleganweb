import React from 'react';

export default function BlogPage({ params }) {


    const blogList = [
        {title: "blog 1 title", slug: "blog-1"},
    ]


    const blog = blogList.find(blog => blog.slug === params.slug)
    

  return (
    <>
    <h1>{blog.title}</h1>
    </>
   
  );
}
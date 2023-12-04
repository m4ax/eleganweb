import { allBlogs } from '../../../../.contentlayer/generated/Blog/_index.mjs'
import CategoriesArea from '../../../../components/blogs/CategoriesArea';
import Image from 'next/image'
import Tags from '../../../../components/blogs/Tags'
import HeaderOne from '../../../../components/layout/headers/header'
import Breadcrumb from '../../../../components/common/breadcrumbs/breadcrumb';
 
export async function generateMetadata({ params, searchParams }, parent) {
   // read route params
   const id = params.id
  
   // fetch data
   const product = allBlogs.find(blog => blog._raw.flattenedPath === params.slug);

   // optionally access and extend (rather than replace) parent metadata
   const previousImages = (await parent).openGraph?.images || []
  
  // Add product image to Open Graph metadata
  return {
   title: product.title,
   description: product.description,
   keywords: product.keywords,
   openGraph: {
     images: [
       {
         url: `https://elegan.io${product.image.filePath.replace('../public', '')}`,// Assuming product.image contains the URL of the image
         width: 800,         // Optionally specify the width
         height: 600,        // Optionally specify the height
         alt: 'Product Image', // Optionally specify an alt text
       },
       ...previousImages
     ],
   },
 };
}


export default function BlogArea({ params }) {

    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

    return (

<>
<HeaderOne />
<Breadcrumb top_title={blog.title}  title="Blog Details" />


<article>

                    <section className="blog-area gray-bg pt-120 pb-80">
                    <div className="container">
                       <div className="row">
                        <div class="col-1 d-none d-md-block"></div>
                          <div className="col-12 col-md-10">
                             <article className="postbox post format-image mb-40">
                                <div className="postbox__thumb">
                                  <Image src={blog.image.filePath.replace('../public', '')} alt="blog image" width={blog.image.width} height={blog.image.height} />
                                </div>
                                <div className="postbox__text potsbox_single">
                                   <div className="post-meta mb-15">
                                      <span><i className="far fa-calendar-check"></i>{blog.publishedAt.split('T')[0]}</span>
                                   </div>
                                   <div dangerouslySetInnerHTML={{ __html: blog.body.html }}></div>
                                   
                                </div>
                                
                             
                             </article>
                          </div>
        
                          <div class="col-1 d-none d-md-block"></div>
                       </div>
                    </div>
                 </section>
</article>  

</>
            );
        };
            
import { allBlogs } from '../../../.contentlayer/generated/Blog/_index.mjs'

export default function BlogArea({ params }) {

    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

    return (

    <article>
        <div>
            <h1>{blog.title}</h1>
        </div>
    </article>
    )
}
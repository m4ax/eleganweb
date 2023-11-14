import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getPostData, getAllPostSlugs } from '../../posts/posts';

interface BlogPost {
    title: string;
    date: string;
    contentHtml: string;
    // Add other properties as needed
}

interface BlogPostProps {
    post: BlogPost;
}

const BlogPost = ({ post }: BlogPostProps) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            {/* Render other post details here */}
        </div>
    );
};

export default BlogPost;

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
    const post = await getPostData(params.slug as string);
    return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs(); // Implement this function in your posts.ts
    return {
        paths,
        fallback: true
    };
};



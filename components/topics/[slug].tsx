// import { GetStaticPaths, GetStaticProps } from "next";

// interface BlogPost {
//   title: string;
//   content: string;
// }

// interface BlogPostProps {
//   post: BlogPost;
// }

// interface Posts {
//   [key: string]: BlogPost;
// }

// const BlogPostPage = ({ post }: BlogPostProps) => {
//   return (
//     <div className="BlogArea">
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </div>
//   );  
// }

// export default BlogPostPage;

// const posts: Posts = {
//   'post-1': { title: "Well Done", content: "Max" },
//   'post-2': { title: "Well Done", content: "Again!" }
// };

// export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
//   const slug = params?.slug as string;
//   const post = posts[slug];

//   // Handle non-existent slug
//   if (!post) {
//     return { notFound: true };
//   }

//   return { props: { post } };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = [
//     { params: { slug: 'post-1' } },
//     { params: { slug: 'post-2' } }
//   ];

//   return { paths, fallback: 'blocking' }; // or fallback: false if you don't need a fallback
// };

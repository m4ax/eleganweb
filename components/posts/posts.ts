import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define an interface for the metadata in your Markdown files
interface PostMetaData {
  title: string;
  date: string;
  // other metadata fields as necessary
}

interface PostData {
  slug: string;
  contentHtml: string;
  title: string;
  date: string;
  // other properties as needed
}

export async function getPostData(slug: string): Promise<PostData> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Convert the blog post content to HTML
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Ensure all properties are defined and provide default values if necessary
  const metaData = matterResult.data as Partial<PostMetaData>;
  const title = metaData.title || 'Default Title';
  const date = metaData.date || 'Default Date';

  return {
    slug,
    contentHtml,
    title,
    date,
    // include other properties from metaData as necessary
  };
}


// Function to get all post slugs (file names without the .md extension)
export function getAllPostSlugs(): { params: { slug: string } }[] {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map(filename => {
    return {
      params: {
        // Remove the file extension to get the slug
        slug: filename.replace(/\.md$/, '')
      }
    };
  });
}


// import cron from 'node-cron';
import fs from 'fs';
import getModelRecipe from './openai.js'; // Import your OpenAI API call function
import slugify from 'slugify';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to generate and save blog content
async function generateAndSaveBlog() {
    try {
        const blogContent = await getModelRecipe();
        const title = "Your Blog Title Here"; // Replace with dynamic title
        const slug = slugify(title.toLowerCase());

        const blogDir = path.join(__dirname, '../frontend/posts', slug);
        const filePath = path.join(blogDir, 'index.mdx');

        if (!fs.existsSync(blogDir)){
            fs.mkdirSync(blogDir, { recursive: true });
        }

        fs.writeFileSync(filePath, blogContent, 'utf-8');
        console.log(`Blog for ${title} written successfully at ${filePath}.`);
    } catch (error) {
        console.error('Error generating blog:', error);
    }
}

generateAndSaveBlog();

// Schedule the task to run once a day (at midnight)
// cron.schedule('0 0 * * *', generateAndSaveBlog);

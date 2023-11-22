// import cron from 'node-cron';
import fs from "fs";
import getModelRecipe from "./openai.js"; // Import your OpenAI API call function
import slugify from "slugify";
import path from "path";
import { fileURLToPath } from "url";
import ideas from './topics/ideas.json' assert { type: 'json' };
import generateImage from "./imageGenerator.js";

import completedIdeas from './topics/completed.json' assert { type: 'json' };
// import cron from "node-cron";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to generate and save blog content
async function generateAndSaveBlog() {
  if (ideas.length > 0) {
    try {
      const topic = ideas[0].title; // Get the first topic

      const imagePath = await generateImage(topic);
      const imageFileName = path.basename(imagePath);

      const blogContent = await getModelRecipe(topic, imageFileName);

      const slug = slugify(topic.toLowerCase());
      const blogDir = path.join(__dirname, "../frontend/posts", slug);
      const filePath = path.join(blogDir, "index.mdx");

      if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
      }

      fs.writeFileSync(filePath, blogContent, "utf-8");
      console.log(`Blog for ${topic} written successfully at ${filePath}.`);

      completedIdeas.completedIdeas.push(topic);
      fs.writeFileSync(
        "./topics/completed.json",
        JSON.stringify(completedIdeas, null, 2),
        "utf-8"
      );

      // Remove the used topic from ideas.json
      ideas.shift();
      fs.writeFileSync("./topics/ideas.json", JSON.stringify(ideas, null, 2), "utf-8");
    } catch (error) {
      console.error("Error generating blog:", error);
    }
  } else {
    console.log("No more blog ideas!");
  }
}

generateAndSaveBlog();

// Schedule blog to run once a day (at midnight)
cron.schedule('0 0 * * *', generateAndSaveBlog);

import dotenv from 'dotenv';
import path from 'path';

// Assuming the first argument is the path to the .env file
const envPath = process.argv[2];
dotenv.config({ path: envPath });

import fs from "fs";
import getModelRecipe from "./openai.js"; 
import slugify from "slugify";
import { fileURLToPath } from "url";
import ideas from './topics/ideas.json' assert { type: 'json' };
import generateImage from "./imageGenerator.js";
import cron from 'node-cron'
import gitCommitAndPush from "./autoGit.js";
import completedIdeas from './topics/completed.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function tidyTopic(text) {
    return text.replace(/:/g, ''); // Removes all colons
}

// Function to generate and save blog content
async function generateAndSaveBlog() {
  if (ideas.length > 0) {
    try {
      const topic = ideas[0].title; // Get the first topic

      const imagePath = await generateImage(topic);
      const imageFileName = path.basename(imagePath);

      const blogContent = await getModelRecipe(topic, imageFileName);
    
      const cleanedTopic = tidyTopic(topic)
      const slug = slugify(cleanedTopic);
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
      await gitCommitAndPush();
    } catch (error) {
      console.error("Error generating blog:", error);
    }
  } else {
    console.log("No more blog ideas!");
  }
}



generateAndSaveBlog();


cron.schedule('0 8 * * *', generateAndSaveBlog, {
  scheduled: true,
});
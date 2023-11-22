import axios from 'axios';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import slugify from 'slugify';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI(apiKey);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateImage(topic) {
    try {
        // Call DALL-E 3 API to generate the image
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: `Blog banner for the topic: ${topic}. Keep it simple. Do not generate any text or words!`,
            n: 1,
            size: "1792x1024"
        });

        console.log(response.data);

        // Extract the image URL from the response
        const imageUrl = response.data[0].url;

    

        // Download the image
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Define the local path for saving the image
        const imageFileName = slugify(topic) + '.png'; 
        const imageFilePath = path.join(__dirname, '../frontend/public/assets/img/blog/generated', imageFileName);

        // Save the image
        fs.writeFileSync(imageFilePath, buffer);

        return imageFilePath;
    } catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
}

export default generateImage;

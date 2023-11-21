import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const myKey = process.env.OPENAI_API_KEY; 
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';





async function getModelRecipe() {

    const topic = "Data Migration in the transport sector.";

    const initialSystemMessage = {
        role: "system",
        content: `Create a blog post on a specified topic with the following front matter included at the top of the markdown content:
    
    ---
    title: 
    publishedAt: 
    updatedAt:
    description: 
    isPublished: true
    image: ""
    tags: 
      - 
      - 
      - 
    ---
    
    The blog should be under 500 words, combining paragraphs and bullet points for easy readability. It should be optimized for SEO to rank well on Google and formatted in markdown.`
    };
    
    const userMessageContent = `Please write a comprehensive and engaging blog post about the challenges of data migration in the transport sector. The content should explore the topic in depth, provide useful insights, and engage the reader with a conversational tone. Ensure the use of relevant keywords for SEO and include practical examples or case studies. The blog should be structured with clear headings and subheadings, and use bullet points for key takeaways.`;
    
    const userMessage = {
        role: "user",
        content: userMessageContent
    };

    const body = {
        model: "gpt-4-1106-preview",
        messages: [initialSystemMessage, userMessage]
    }


    try {
        const response = await axios.post(OPENAI_API_ENDPOINT, body, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer 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`
            }
        });

        const data = response.data;
        console.log(data);
        const content = data.choices[0].message.content;
        console.log(content);

        return content;
    } catch (error) {
        console.error('API error:', error.response.data);
        throw error;
    }
};

getModelRecipe().then(content => {
    console.log("Blog Content:", content);
}).catch(error => {
    console.error("Error:", error);
});

export default getModelRecipe;


// const handleClick = async () => {
//     // Will send user input to api
//     const apiResponse = await getModelRecipe(goal, dataSample, functions)
//     const newResponse = typeof apiResponse === 'string' ? JSON.parse(apiResponse) : apiResponse;
//     setResponse(newResponse)
// }
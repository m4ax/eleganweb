# To Do 


## Automate blog tasks

Upload to server to automate (Matthew)


## Minor Fixes - that I don't like about the website:


- Compress generated imgs
- Mockup images 
- Spacing
- Pricing Footer
- Importer needs to be added
- class, className error.

----------

# How it works

I have written scripts. No server code. 

I set up node-cron to schedule. This is at bottom of generate.js.

- node generate.js

- Fetches a blog title from ideas.json.
- Generates a blog banner using DALL-E, saving it to /public/img/blog/generated in the frontend.
- Passes the image location and title to openai.js to create content with GPT-4.
- Saves the generated content in /posts on the frontend in mdx.
- On successful generation, moves the title from ideas.json to completed.json.
- Automatically pushes changes to Git. This triggers a server restart, updating our website elegan.io with new content and refreshing the sitemap for dynamic pages.


This was the best way I thought to automate.


The point of the blogs is to drive traffic but mainly enhance our site's relevance in Google's search results for data migration / our niche authority






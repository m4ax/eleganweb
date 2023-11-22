# To Do 

## Automate blog tasks

Upload to server to automate (Matthew)


## Minor Fixes - that I don't like about the website:


- Spacing
- Pricing Footer
- Set up email
- Make calendly better
- Importer needs to be added
- Alter the features list on homepage.
- class, className error.
- Header smaller on blog pages.
- Title on blog pages.



----------

# How it works

I have written scripts. No server code. 

I set up node-cron to schedule. This is at bottom of generate.js.

- node generate.js

Fetches a blog title from ideas.json.
Generates a blog banner using DALL-E, saving it to /public/img/blog/generated in the frontend.
Passes the image location and title to openai.js to create content with GPT-4.
Saves the generated content in /posts on the frontend in mdx.
On successful generation, moves the title from ideas.json to completed.json.
Automatically pushes changes to Git. This triggers a server restart, updating our website elegan.io with new content and refreshing the sitemap for dynamic pages.


This was the best way I thought to automate.


The point of this blog automation is to drive traffic but mainly enhance our site's relevance in Google's search results for data migration, improving to our niche authority.







module.exports = {
  siteUrl: 'http://www.elegan.io',
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 5000, // Maximum number of URLs per sitemap file, adjust as needed
  transform: async (config, path) => {
      // Custom function to assign changefreq and priority based on the path
      return {
          loc: path, // The URL of the page
          changefreq: determineChangeFreq(path),
          priority: determinePriority(path),
          lastmod: new Date().toISOString(),
      };
  },
  additionalPaths: async (config) => {
    const blogSlugs = await getAllBlogSlugs();
    return blogSlugs.map((url) => ({
      loc: `/topic${url}`, // Adjust the path according to your URL structure
    }));
  },
  // additional options here if needed
};

import { allBlogs } from 'contentlayer/generated';

async function getAllBlogSlugs() {
  return allBlogs.map((blog) => blog.url);
}

function determineChangeFreq(path) {
  // Define logic to determine change frequency based on the path
  if (path === '/' || path.includes('/blog')) {
      return 'daily';
  }
  // Set other specific paths as needed
  return 'monthly'; // Default value for all other paths
}

function determinePriority(path) {
  // Define logic to determine priority based on the path
  if (path === '/') {
      return 1.0; // Highest priority for the home page
  }
  if (path.includes('/uploader') || path.includes('/contact')) {
      return 0.8; // Slightly higher priority for important pages
  }
  if (path.includes('/pipeline') || path.includes('/contact')) {
    return 0.8; // Slightly higher priority for important pages
}
  // Set other specific paths as needed
  return 0.5; // Default value for all other paths
}

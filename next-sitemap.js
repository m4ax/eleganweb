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
  // additional options here if needed
};

function determineChangeFreq(path) {
  // Define logic to determine change frequency based on the path
  if (path === '/' || path.includes('/blog')) {
      return 'daily';
  }
  // Set other specific paths as needed
  return 'weekly'; // Default value for all other paths
}

function determinePriority(path) {
  // Define logic to determine priority based on the path
  if (path === '/') {
      return 1.0; // Highest priority for the home page
  }
  if (path.includes('/about') || path.includes('/contact')) {
      return 0.8; // Slightly higher priority for important pages
  }
  // Set other specific paths as needed
  return 0.5; // Default value for all other paths
}

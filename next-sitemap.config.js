/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://elgardinero.ma',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/services/')) {
      priority = 0.8;
    } else if (path.startsWith('/jardinier-')) {
      priority = 0.8;
    } else if (path === '/paysagiste-rabat') {
      priority = 0.9;
    } else if (path.startsWith('/paysagiste-')) {
      priority = 0.8;
    } else if (path === '/blog') {
      priority = 0.8;
      changefreq = 'daily';
    } else if (path.startsWith('/blog/')) {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (path === '/mentions-legales') {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

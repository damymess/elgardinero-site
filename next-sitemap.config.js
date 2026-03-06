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
};

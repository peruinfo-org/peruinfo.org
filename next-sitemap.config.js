/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://peruinfo.org',
  generateRobotsTxt: false, // (optional)
  
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://peruinfo.org/sitemap-empresas-index.xml',
    ]
  },
}
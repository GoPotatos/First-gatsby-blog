/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: path.resolve(`${__dirname}/src/projects`),
      },
    },
  ],
  siteMetadata: {
    title: "Web Warrior",
    description: "Webdev portfolio",
    copyright: "This website is copyright 2022 Web Warrior",
    contact: "ninja@gmail.com",
  },
}

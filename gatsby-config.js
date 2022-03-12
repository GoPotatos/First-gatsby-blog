/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve(`${__dirname}/src/projects`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve(`${__dirname}/src/images`),
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

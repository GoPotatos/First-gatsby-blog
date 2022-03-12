const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const component = path.resolve("./src/templates/project-details.js")
  const { createPage } = actions
  const { data } = await graphql(`
    query PagesDetails {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.map(async (project, index) => {
    console.log("page", index, project.frontmatter.slug)
    return await createPage({
      path: `/projects/${project.frontmatter.slug}`,
      component,
      context: { slug: project.frontmatter.slug },
    })
  })
}

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import styles from "../../styles/projects.module.css"
import ThumbImage from "gatsby-image"

function Projects({ data }) {
  console.log("data", data)
  const projects = data.allMarkdownRemark.nodes
  const contact = data.contact.siteMetadata.contact
  // const images = data.allFile.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects & Websites I have created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <ThumbImage
                  fluid={project.frontmatter.thumb.childImageSharp.fluid}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? contact me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export default Projects

export const ProjectsPage = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        id
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

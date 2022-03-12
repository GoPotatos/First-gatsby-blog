import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/projects-details.module.css"
import Img from "gatsby-image"
import { graphql } from "gatsby"
function ProjectDetails({ data }) {
  console.log("details", data)
  //   const data = useStaticQuery(graphql``)
  const details = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{details.title}</h2>
        <h3>{details.stack}</h3>
        <div className={styles.featured}>
          <Img fluid={details.featuredImg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query Details($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        stack
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

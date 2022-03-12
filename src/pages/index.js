import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"
import BannerImage from "gatsby-image"
function HomePage({ data }) {
  console.log("Homepage", data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer and developer based on Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My portfolio & projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="banner " style={{ maxWidth: "100%" }} /> */}
        <BannerImage fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

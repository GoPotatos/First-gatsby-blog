import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../styles/home.module.css"
function HomePage() {
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
        <img
          src="/banner.png"
          alt="banner image"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  )
}

export default HomePage

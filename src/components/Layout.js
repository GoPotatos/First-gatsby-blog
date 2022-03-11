import React from "react"
import Navbar from "./Navbar"
import styles from "../styles/global.css"
function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>All copyrights &copy; 2022</p>
      </footer>
    </div>
  )
}

export default Layout

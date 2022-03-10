import React from "react"
import Navbar from "./Navbar"
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer>
        <p>All copyrights &copy; 2022</p>
      </footer>
    </div>
  )
}

export default Layout

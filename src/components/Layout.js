import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BlockOne from "./BlockOne"
import scrollTo from "gatsby-plugin-smoothscroll"
import { BiArrowToTop } from "react-icons/bi"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        className="container mx-auto min-h-screen items-center bg-white"
        id="toppart"
      >
        <Header />
        <BlockOne />
        <main>{children}</main>
        <footer className="relative">
          <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div className="absolute bottom-10 right-10 text-white">
            <Link
              to="#toppart"
              aria-label="Top page"
              onClick={() => scrollTo("#toppart")}
            >
              <BiArrowToTop className="text-5xl text-gray-200 hover:text-white" />
            </Link>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

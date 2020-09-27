/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header"
import { LayoutContainer } from "./styled"
import Footer from "../Footer"

import GlobalStyles from "../../styles/GlobalStyles"

const Layout = ({ data, children }) => (
  <>
    <GlobalStyles />
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    <LayoutContainer>
      <main id="main-content">{children}</main>
    </LayoutContainer>
  </>
)

export default function MyLayout(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <Layout data={data} {...props} />}
    />
  )
}

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

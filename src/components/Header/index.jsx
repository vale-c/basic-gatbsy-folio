import PropTypes from "prop-types"
import React from "react"

import { NavLink, HomeLink, Content, SiteHeader, GitHubLink } from './styled'

const Header = () => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/about">About Me</HomeLink>
        <NavLink to="/blog">Blog</NavLink>
        <GitHubLink href="https://github.com/vale-c/gatsby-starter-vale">
          GitHub
        </GitHubLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

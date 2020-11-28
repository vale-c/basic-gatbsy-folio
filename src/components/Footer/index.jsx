import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FooterWrapper } from "./styled"

const Footer = ({ children }) => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built with ☕ & 💖 by 
    <a
      href="https://www.valentinacalabrese.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      {` `}Vale
    </a>
  </FooterWrapper>
)

export default Footer

Footer.propTypes = {
  socialLinks: PropTypes.array,
}

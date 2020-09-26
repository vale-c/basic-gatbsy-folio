import PropTypes from "prop-types"
import React, { useContext } from "react"
import { Container, Content, NavLink, SiteHeader, ToggleWrapper } from './styled'
import Toggle from "../Toggle"

import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import { useTheme } from "../../context/theme-context"

const Header = () =>  {
  
  const { theme, toggleTheme } = useTheme()

  return (
    <Container>
      <SiteHeader>
        <Content>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink href="https://github.com/vale-c/gatsby-starter-vale">
            GitHub
          </NavLink>
          <ToggleWrapper>
            <Toggle
              defaultChecked={theme === "dark" ? true : false}
              onChange={toggleTheme}
              icons={{
                checked: (
                  <img
                    style={{ pointerEvents: "none" }}
                    width="16"
                    height="16"
                    alt="moon"
                    aria-hidden
                    src={moon}
                  />
                ),
                unchecked: (
                  <img
                    style={{ pointerEvents: "none" }}
                    width="16"
                    height="16"
                    alt="sun"
                    aria-hidden
                    src={sun}
                  />
                ),
              }}
            />
          </ToggleWrapper>
        </Content>
      </SiteHeader>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

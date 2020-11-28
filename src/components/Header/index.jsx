import PropTypes from "prop-types"
import React, { useContext } from "react"
import { HeaderContent, NavLink, SiteHeader, ToggleWrapper } from "./styled"
import Toggle from "../Toggle"
import Container from "../UI/Container"
import sun from "../../assets/images/sun.png"
import moon from "../../assets/images/moon.png"
import { useTheme } from "../../context/theme-context"

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Container>
      <SiteHeader>
        <HeaderContent>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink href="https://github.com/vale-c/">
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
        </HeaderContent>
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

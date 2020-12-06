import PropTypes from 'prop-types'
import React, { useState } from 'react'

import Toggle from '../Toggle'
import sun from '../../assets/images/sun.png'
import moon from '../../assets/images/moon.png'
import { useTheme } from '../../context/theme-context'

import * as Styled from './styled'
import { ToggleWrapper } from './styled'

const mainNavItems = [
  {
    title: 'Home',
    slug: '/',
  },
  {
    title: 'About Me',
    slug: '/about/',
  },
  {
    title: 'Blog',
    slug: '/blog/',
  },
  {
    title: 'Work',
    slug: '/work/',
  },
]

const HeaderNav = () => {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <Styled.HeaderNavContainer>
      <Styled.MainNav open={open}>
        {mainNavItems.map((item, index) => (
          <Styled.MainNavItem
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName="active"
            whiletap={{ scale: 0.9 }}
          >
            {item.title}
          </Styled.MainNavItem>
        ))}
        <ToggleWrapper open={open}>
          <Toggle
            defaultChecked={theme === 'dark' ? true : false}
            onChange={toggleTheme}
            icons={{
              checked: (
                <img
                  style={{ pointerEvents: 'none' }}
                  width="16"
                  height="16"
                  alt="moon"
                  aria-hidden
                  src={moon}
                />
              ),
              unchecked: (
                <img
                  style={{ pointerEvents: 'none' }}
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
      </Styled.MainNav>
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
    </Styled.HeaderNavContainer>
  )
}

HeaderNav.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderNav.defaultProps = {
  siteTitle: ``,
}

export default HeaderNav

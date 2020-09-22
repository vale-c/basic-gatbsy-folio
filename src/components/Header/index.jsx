import PropTypes from "prop-types";
import React from "react";
import { Link } from 'gatsby';
import { HeaderLinks, HeaderTitle, HeaderWrapper, StyledLink } from './styled';


const Header = ({ siteTitle }) => (
    <HeaderWrapper>
      <HeaderTitle>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </HeaderTitle>
  
      <HeaderLinks>
        <StyledLink
            to="/about/">
            About
        </StyledLink>
        <StyledLink
            to="/work/">
            Work
        </StyledLink>
        <StyledLink
            to="/blog/">
            Blog
        </StyledLink>
      </HeaderLinks>
    </HeaderWrapper>

)

export default Header;
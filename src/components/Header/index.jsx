import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {  HeaderLinks, HeaderTitle, HeaderWrapper } from './styled';

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
        <Link
          activeClassName="Link--is-active"
          to="/work">
          Work
        </Link>
        <Link
          activeClassName="Link--is-active"
          to="/blog">
          Blog
        </Link>
      </HeaderLinks>
    </HeaderWrapper>

)

export default Header;
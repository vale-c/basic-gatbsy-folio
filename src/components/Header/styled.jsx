import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.header`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgDark};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.accent};
  }
`

export const Content = styled.div`
  max-width: 860px;
  padding: 20px 15px;
  margin: 0 70px;
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.accent};
  font-family: "Changa One", sans-serif;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    background-color: ${({ theme }) => theme.color};
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

export const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: flex-end;
`

export const ToggleWrapper = styled.div`
  display: inline-block;
  position: absolute;
  margin: 0 16px;
  right: 0;
`

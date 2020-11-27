import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.header`
  ${tw`flex flex-wrap max-w-screen-md w-full mx-auto p-5`};
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgDark};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.accent};
  }
`

export const HeaderContent = styled.div`
  ${tw`flex justify-end mx-8 my-2`}
`

export const NavLink = styled(Link)`
  ${tw`ml-6`}
  color: ${({ theme }) => theme.accent};
  letter-spacing: 2px;

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
  ${tw`flex-wrap max-w-screen-md w-full mx-auto px-2`}
`

export const ToggleWrapper = styled.div`
  ${tw`ml-5 -my-1`}
  display: inline-block;
`

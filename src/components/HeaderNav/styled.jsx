import styled from 'styled-components'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

export const HeaderNavContainer = styled.div`
  ${tw`p-8`};
`
export const MainNav = styled.nav`
  ${tw`justify-end sm:flex flex-col sm:flex-row sm:w-auto w-full order-last sm:order-none my-4 sm:my-0 hidden`};
  ${({ open }) => open && tw`flex`};
`

export const MainNavItem = motion.custom(styled(Link)`
  ${tw`text-lg relative border-b border-transparent ml-0 sm:ml-8 mt-3 sm:mt-0`};
  width: max-content;

  ${tw`ml-6`}
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  letter-spacing: 2px;

  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    background-color: ${({ theme }) => theme.underlineAccent};
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
`)

export const ToogleMainNav = styled.button`
  ${tw`flex flex-col justify-end cursor-pointer w-6 h-5 sm:hidden`};
  outline: none !important;

  span {
    background-color: ${({ theme }) => theme.underlineAccent};
    ${tw`inline-block w-6 h-px`};
    transition: 0.2s;

    &:first-child {
      ${({ open }) => (open ? tw`-mb-px` : tw`mb-1`)};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    }

    &:last-child {
      ${({ open }) => (open ? tw`-mt-px` : tw`mt-1`)};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    }

    &:nth-child(2) {
      background-color: ${({ theme }) => theme.fontAccent};
      ${tw`inline-block w-8 h-px`};

      ${({ open }) => (open ? tw`opacity-0` : tw`opacity-1`)};
      transform: ${({ open }) => (open ? 'translate(20px)' : 'none')};
    }
  }
`

export const ToggleWrapper = styled.div`
  ${tw`mx-6`}
  display: inline-block;
  ${({ open }) => (!open ? tw`-mt-px` : tw`mt-3`)};
`

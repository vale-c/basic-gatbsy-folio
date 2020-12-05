import styled from 'styled-components'
import tw from 'tailwind.macro'
import '../../styles/typography.css'

export const Layout = styled.main`
  font-family: 'GT Walsheim', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ${tw`flex flex-col min-h-screen`};
`

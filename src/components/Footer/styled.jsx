import styled from "styled-components"

export const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.description};
  ${tw`block text-center font-semibold py-4`}
`

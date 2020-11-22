import styled from "styled-components"

export const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.description};
  ${tw`flex justify-center border-t-2 text-center font-semibold`}
`

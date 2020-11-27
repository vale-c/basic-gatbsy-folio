import styled from "styled-components"

export const ContentWrapper = styled.div`
  ${tw`m-auto text-center`}
`

export const HeaderTitle = styled.h1`
  ${tw`text-4xl`}
`

export const HeaderDescription = styled.h3`
  ${tw`text-xl block`}
  color: ${({ theme }) => theme.description};
`

export const ImageWrapper = styled.div`
  ${tw`flex justify-center`}
`

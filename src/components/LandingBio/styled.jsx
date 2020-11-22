import styled from "styled-components"

export const Container = styled.div`
  ${tw`flex h-screen justify-center items-center`}
`

export const ContentWrapper = styled.div`
  ${tw`text-center`}
`

export const HeaderTitle = styled.h1`
  ${tw`text-3xl`}
`

export const HeaderDescription = styled.h4`
  ${tw`text-xl block`}
  color: ${({ theme }) => theme.description};
`

export const ImageWrapper = styled.div`
  ${tw`flex justify-center`}
`

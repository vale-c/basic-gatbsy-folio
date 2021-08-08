import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`mx-24 my-16 px-4 md:px-12`}
`

export const HeadingOne = styled.h1`
  ${tw`text-5xl`}
`

export const HeadingTwo = styled.h1`
  ${tw`text-5xl`}
  color: ${({ theme }) => theme.description};
`

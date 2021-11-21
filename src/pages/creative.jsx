import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/SEO'
import Circle from '../components/CodeArt/Circle'
import Header from '../components/Header'
import tw from 'tailwind.macro'

const Wrapper = styled.div`
  ${tw`m-4`}
`
const Title = styled.h1`
  ${tw`text-3xl font-bold text-center mt-8`}
`

const Spacer = styled.div`
  ${tw`p-2`}
`

const Subtitle = styled.h3`
  ${tw`text-center my-2`}
  color: ${({ theme }) => theme.description}
`
const StyledLink = styled(Link)`
  ${tw`ml-24 mt-4 font-bold hover:underline`}
`

const CreativeCoding = () => (
  <Wrapper>
    <SEO title="Creative" />
    <Header />
    <Title>Creative Coding</Title>
    <Subtitle>Some fun stuff I build when I feel inspired.</Subtitle>
    <Circle />
    <Spacer />
  </Wrapper>
)

export default CreativeCoding

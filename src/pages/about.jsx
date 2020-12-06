import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Terminal from '../components/Terminal'
import tw from 'tailwind.macro'

const Greeting = styled.h4`
  ${tw`text-xl`}
  color: ${({ theme }) => theme.description};
`

const Title = styled.h1`
  ${tw`text-3xl font-bold text-center mt-8`}
`

const Spacer = styled.div`
  ${tw`p-2`}
`
const BottomSpacer = styled.div`
  ${tw`my-12`}
`

const Subtitle = styled.h3`
  ${tw`text-center my-2`}
`

const StyledText = styled.div`
  ${tw`text-center text-xl my-2 px-24`}
  color: ${({ theme }) => theme.description};
`

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <Title>About me</Title>
    <Spacer />
    <Subtitle>
      <Greeting>
        Hey there!
        <span role="img" aria-label="wave-hand-emoji">
          {' '}
          👋🏻
        </span>
      </Greeting>
      <Spacer />
    </Subtitle>
    <StyledText>
      Thanks for taking the time to land on this page. <Spacer />
    </StyledText>
    <Spacer />
    <Spacer />
    <Terminal />
    <BottomSpacer />
  </Layout>
)

export default About

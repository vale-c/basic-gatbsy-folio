import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import tw from "tailwind.macro"

const AboutWrapper = styled.div`
  ${tw`m-4`}
`

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

const Subtitle = styled.h3`
  ${tw`text-center my-2`}
`

const StyledText = styled.div`
  ${tw`my-2 px-12`}
`

const StyledLink = styled(Link)`
  ${tw`ml-12 mt-4 font-bold hover:underline`}
`

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <AboutWrapper>
      <Title>About me</Title>
      <Subtitle>
        <Greeting>Hey there!</Greeting>
        <span role="img" aria-label="wave-hand-emoji">
          {" "}
          👋
        </span>
      </Subtitle>
      <StyledText>
        <p>
          My name is <b>Valentina</b> and I am a Front-end Software Engineer
          with a knack for
          <a
            href="https://medium.com/eightshapes-llc/defining-design-systems-6dd4b03e0ff6"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Design Systems{" "}
          </a>{" "}
          & a special interest in{" "}
          <a
            href="https://en.wikipedia.org/wiki/User-centered_design"
            target="_blank"
            rel="noopener noreferrer"
          >
            UCD
          </a>
          .
          <Spacer />
          Disclaimer:
          <Spacer />
          Although I generally enjoy reading other people's About me pages I
          don't really like writing a lot about myself{" "}
          <i>
            (also I am quite
            <a
              href="https://media.giphy.com/media/4KkSbPnZ5Skec/giphy.gif"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              lazy
            </a>
          </i>{" "}
          😅), so in case you're curious to learn something more about my
          personality you can take a look at{" "}
          <a
            href="https://www.16personalities.com/profiles/c467796fe658b"
            rel="noopener noreferrer"
            target="_blank"
          >
            this
          </a>
          .
        </p>
      </StyledText>
      <StyledLink to="/">
        <span role="img" aria-label="back-emoji">
          🔙
        </span>
      </StyledLink>
    </AboutWrapper>
  </Layout>
)

export default About

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Projects from "../components/Projects"
import tw from "tailwind.macro"

const WorkWrapper = styled.div`
  ${tw`m-4`}
`
const Title = styled.h1`
  ${tw`text-3xl font-bold text-center mt-8`}
`

const Subtitle = styled.h3`
  ${tw`text-center my-2 text-grey-darker`}
`
const StyledLink = styled(Link)`
  ${tw`ml-8 my-2 font-bold hover:underline`}
`

const Work = () => (
  <WorkWrapper>
    <Layout>
      <SEO title="Work" />
      <Title>Personal Projects</Title>
      <Subtitle>Here you can take a look at some of my side-projects.</Subtitle>
      <Projects />
      <StyledLink to="/">🔙 Home</StyledLink>
    </Layout>
  </WorkWrapper>
)

export default Work

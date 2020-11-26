import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "./seo"
import Projects from "../components/Projects"

const WorkWrapper = styled.div`
  padding: 0 50px;
`

const Work = () => (
  <WorkWrapper>
    <Layout>
      <SEO title="Work" />
      <h1>Projects</h1>
      <h4>
        <i>Hey there!</i>
      </h4>
      <p>Here you can take a look at some of my personal side-projects.</p>
      <Projects />
      <Link to="/">🔙 to Home</Link>
    </Layout>
  </WorkWrapper>
)

export default Work

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "./seo"

const AboutWrapper = styled.div`
  padding: 0 50px;
`

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <AboutWrapper>
      <h1>About me</h1>
      <p>
        <i>Hey there!</i>
        <span role="img" aria-label="wave-hand-emoji">
          {" "}
          👋
        </span>
      </p>
      <p className="about">
        My name is Valentina and I am a Front-end Software Engineer specializing
        in Design Systems &{" "}
        <a
          href="https://en.wikipedia.org/wiki/User-centered_design"
          target="_blank"
          rel="noopener noreferrer"
        >
          UCD
        </a>
        .
      </p>
      <p>
        <em>Disclaimer:</em>
        <br></br>
        <hr></hr>
        Although I generally enjoy reading other people's About me pages I don't really like writing about myself (plus I am quite lazy),
        but in case you're curious to get to know me a bit better you can take a
        look at{" "}
        <a
          href="https://www.16personalities.com/profiles/c467796fe658b"
          rel="noopener noreferrer"
          target="_blank"
        >
          this link
        </a>
        .
      </p>
      <Link to="/">
        <span role="img" aria-label="back-emoji">
          🔙
        </span>
      </Link>
    </AboutWrapper>
  </Layout>
)

export default About

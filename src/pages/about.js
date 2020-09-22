import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>About me</h1>
    <h4><i>Hey there!</i></h4>
    <p>My name is Valentina and I am a Front-end Software Engineer with a passion for working with Design Systems & UCD (User Centered Design).</p>
    <Link to="/">🔙 to Home</Link>
  </Layout>
)

export default About

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "./seo"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Projects</h1>
    <h4>
      <i>Hey there!</i>
    </h4>
    <p>Here you can take a look at some of my personal side-projects.</p>
    <Link to="/work">🔙 to Home</Link>
  </Layout>
)

export default Work

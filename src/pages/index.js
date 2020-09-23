import React from "react"
import { Link } from "gatsby"
import LandingBio from "../components/LandingBio"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `react`]} />
    <LandingBio />
    <Link to="/"><span role="img" aria-label="back-emoji">🔙 Home</span></Link>
  </Layout>
)

export default IndexPage

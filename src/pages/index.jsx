import React from "react"
import LandingBio from "../components/LandingBio"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import SEO from "../components/SEO"

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `portfolio`, `react`, `developer`]}
      />
      <LandingBio />
      <Posts />
    </Layout>
  </>
)

export default IndexPage

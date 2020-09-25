import React from "react"
import Image from "../components/Image"
import LandingBio from "../components/LandingBio"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `react`]} />
    <LandingBio />
    <Image fadeIn />
  </Layout>
)

export default IndexPage

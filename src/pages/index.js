import React from "react"
import Image from "../components/Image"
import LandingBio from "../components/LandingBio"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "./seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `portfolio`, `react`, `developer`]}
      />
      <LandingBio />
      <Image fadeIn />
    </Layout>
    <Footer />
  </>
)

export default IndexPage

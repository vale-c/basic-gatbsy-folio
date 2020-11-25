import React from "react"
import LandingBio from "../components/LandingBio"
import Layout from "../components/Layout"
import SEO from "./seo"
import GlobalStyles from "../styles/GlobalStyles"
import "tailwindcss/tailwind.css"

const IndexPage = () => (
  <>
    <Layout>
      <GlobalStyles />
      <SEO
        title="Home"
        keywords={[`gatsby`, `portfolio`, `react`, `developer`]}
      />
      <LandingBio />
    </Layout>
  </>
)

export default IndexPage

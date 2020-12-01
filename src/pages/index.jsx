import React from 'react'
import LandingBio from '../components/LandingBio'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import SEO from '../components/SEO'

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `portfolio`, `react`, `developer`]}
      />
      <LandingBio />
      <Projects />
    </Layout>
  </>
)

export default IndexPage

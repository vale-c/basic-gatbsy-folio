import React from "react"
import styled from "styled-components"
import Image from "../components/Image"
import LandingBio from "../components/LandingBio"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "./seo"

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
`
const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `portfolio`, `react`, `developer`]}
      />
      <LandingBio />
      <ImgWrapper>
        <Image fadeIn />
      </ImgWrapper>
    </Layout>
    <Footer />
  </>
)

export default IndexPage

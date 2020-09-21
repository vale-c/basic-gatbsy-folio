import React from "react"
import { Link } from "gatsby"
import Header from '../components/Header'
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey there</h1>
    <p>Welcome to my portfolio.</p>
    <p>A digital space where ideas are converted into pixels.</p>

    <Image />

    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage

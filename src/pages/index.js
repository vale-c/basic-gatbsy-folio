import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey there</h1>
    <p>Welcome to my personal website.</p>
    <p>A digital space where ideas 💡 are converted into pixels 💻.</p>
  </Layout>
)

export default IndexPage

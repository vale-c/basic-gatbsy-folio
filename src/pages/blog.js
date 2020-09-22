import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>The Blog</h1>
    <p>Welcome to the blog 📰. Here is where I share a few of my thoughts about Tech & Lifestyle. 🤓</p>
    <Link to="/">🔙 to Home</Link>
  </Layout>
)

export default Blog

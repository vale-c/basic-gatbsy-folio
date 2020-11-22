import React from "react"

import Layout from "../components/Layout"
import SEO from "./seo"
import Posts from "../components/Posts"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Posts />
    </Layout>
  )
}

export default BlogPage

import React from "react"
import SEO from "../components/SEO"
import Posts from "../components/Posts"
import Header from '../components/Header'

const BlogPage = () => {
  return (
    <>
      <Header />
      <SEO title="Blog" />
      <Posts />
    </>
  )
}

export default BlogPage

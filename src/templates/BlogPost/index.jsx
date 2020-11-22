import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"

import Layout from "../../components/Layout"
import SEO from "../../pages/seo"
import FormatHtml from "../../components/FormatHtml"

import { Links, Container, TitleSection } from "./styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <TitleSection
          title={post.frontmatter.date}
          subtitle={post.frontmatter.title}
        />
        <FormatHtml content={post.html} />
        <Links>
          <span>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </Links>
      </Container>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`

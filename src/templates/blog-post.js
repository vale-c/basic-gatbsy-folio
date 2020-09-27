import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import colors from "../styles/colors"

import Layout from "../components/layout"
import SEO from "../pages/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 30px;
  background-color: ${({ theme }) => theme.bg};
`

const MarkedHeader = styled.h1`
  color: ${colors.grey100};
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    ${colors.blue500},
    ${colors.green400} 100%,
    ${colors.purple600}
  );
  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: ${({ theme }) => theme.color};
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
  }
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;
    background-image: linear-gradient(${colors.grey200}, ${colors.grey200});
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 90%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 90%;
    }
  }

  a > code:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 400;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

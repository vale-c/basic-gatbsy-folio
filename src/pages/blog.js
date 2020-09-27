import React from "react"
import { Link, graphql } from "gatsby"
import styled, { css } from "styled-components"
import colors from "../styles/colors"

import Layout from "../components/layout"
import SEO from "./seo"

const Content = styled.div`
  margin: 0 auto;
  padding: 50px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

const Col = styled.div`
  flex: 1 1 30%;
  max-width: 50%;
  margin: 10px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.font};
  border: 2px solid ${({ theme }) => theme.body};
  border-radius: 8px;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    flex: 1 1 50%;
    max-width: 100%;
  }
`

const ArticleDate = styled.h5`
  display: inline;
`

const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    ${colors.blue500},
    ${colors.green400} 100%,
    ${colors.purple600}
  );
`

const ReadingTime = styled.h5`
  display: inline;
`

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <h1>Blog</h1>
        <Row>
          {data.allMarkdownRemark.edges
            .filter(({ node }) => {
              const rawDate = node.frontmatter.rawDate
              const date = new Date(rawDate)
              return date < new Date()
            })
            .map(({ node }) => (
              <Col key={node.id}>
                <Link
                  to={node.frontmatter.path}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                  `}
                >
                  <MarkerHeader>{node.frontmatter.title}</MarkerHeader>
                </Link>
                <div>
                  <ArticleDate>{node.frontmatter.date}</ArticleDate>
                  <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                </div>
                <p>{node.excerpt}</p>
              </Col>
            ))}
        </Row>
      </Content>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`

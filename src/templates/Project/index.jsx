import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import TitleSection from '../../components/UI/TitleSection'
import FormatHtml from '../../components/FormatHtml'

import * as Styled from './styled'

const Project = ({ data, pageContext }) => {
  const project = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <Styled.Wrapper>
        <TitleSection
          title={project.frontmatter.date}
          subtitle={project.frontmatter.title}
        />
        <FormatHtml content={project.html} />
        <Styled.Links>
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
        </Styled.Links>
      </Styled.Wrapper>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`

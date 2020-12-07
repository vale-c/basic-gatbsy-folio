import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Img from 'gatsby-image'
import rehypeReact from 'rehype-react'
import * as Styled from './styled'

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}

const Paragraph = ({ children }) => <p className="mt-2">{children}</p>
const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
  >
    {children}
  </a>
)
const Subtitle = ({ children }) => (
  <h2 className="mt-2 font-semibold">{children}</h2>
)
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { p: Paragraph, a: ExternalLink, h2: Subtitle },
}).Compiler

const BlogPost = ({
  data: {
    markdownRemark: {
      frontmatter: { title, cover },
      htmlAst,
    },
  },
  pageContext,
}) => {
  const { previous, next } = pageContext
  return (
    <Layout>
      <SEO title={title} />
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ImgWrapper>
          <NonStretchedImage fluid={cover.childImageSharp.fluid} alt={title} />
        </Styled.ImgWrapper>
        <Paragraph>{renderAst(htmlAst)}</Paragraph>
        <Styled.Links>
          <span>
            {previous && (
              <Styled.ProjectLink to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Styled.ProjectLink>
            )}
          </span>
          <span>
            {next && (
              <Styled.ProjectLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Styled.ProjectLink>
            )}
          </span>
        </Styled.Links>
      </Styled.Container>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
      htmlAst
    }
  }
`

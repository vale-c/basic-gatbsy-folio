import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Container from '../../components/UI/Container'

import rehypeReact from 'rehype-react'
import * as Styled from './styled'

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
      frontmatter: { title, date, formattedDate, cover },
      htmlAst,
    },
  },
  pageContext,
}) => {
  const { previous, next } = pageContext
  return (
    <Layout className="animate-ping">
      <SEO title={title} />
      <Container section>
        <Styled.Wrapper>
          <Styled.Time dateTime={date}>{formattedDate}</Styled.Time>
          <Styled.Title>{title}</Styled.Title>
          <Styled.ImgWrapper>
            <Styled.Image fixed={cover.childImageSharp.fixed} alt={title} />
          </Styled.ImgWrapper>

          <Paragraph>{renderAst(htmlAst)}</Paragraph>
          <Styled.Links>
            <span>
              {previous && (
                <Styled.PostLink to={previous.fields.slug} rel="previous">
                  ← {previous.frontmatter.title}
                </Styled.PostLink>
              )}
            </span>
            <span>
              {next && (
                <Styled.PostLink to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Styled.PostLink>
              )}
            </span>
          </Styled.Links>
        </Styled.Wrapper>
      </Container>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        formattedDate: date(formatString: "MMM DD, YYYY")
        cover {
          childImageSharp {
            fixed(width: 500, height: 300, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      htmlAst
    }
  }
`

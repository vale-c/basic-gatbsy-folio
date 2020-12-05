import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'

import TitleSection from '../UI/TitleSection'

import * as Styled from './styled'
import { Wrapper } from './styled'

const Posts = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { category: { eq: "blog" }, published: { eq: true } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const blogSectionTitle = markdownRemark.frontmatter
  const posts = allMarkdownRemark.edges

  return (
    <Wrapper>
      <TitleSection
        title={blogSectionTitle.title}
        subtitle={blogSectionTitle.subtitle}
        center
      />
      <Styled.Posts>
        {posts.map(item => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags },
          } = item.node

          return (
            <Styled.Post key={id}>
              <Link to={slug}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Styled.Card>
                    <Styled.Image>
                      <Img fluid={cover.childImageSharp.fluid} alt={title} />
                    </Styled.Image>
                    <Styled.Content>
                      <Styled.Date>{date}</Styled.Date>
                      <Styled.Title>{title}</Styled.Title>
                      <Styled.Description>{description}</Styled.Description>
                    </Styled.Content>
                    <Styled.Tags>
                      {tags.map(item => (
                        <Styled.Tag key={item}>{item}</Styled.Tag>
                      ))}
                    </Styled.Tags>
                  </Styled.Card>
                </motion.div>
              </Link>
            </Styled.Post>
          )
        })}
      </Styled.Posts>
    </Wrapper>
  )
}

export default Posts

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import * as Styled from './styled'

const MyPosts = () => {
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
    <Styled.Container>
      <Styled.TitleSection
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
            <motion.div whileHover={{ scale: 1.05 }} whiletap={{ scale: 0.95 }}>
              <Styled.BlogCard key={id}>
                <Link to={slug}>
                  <Img
                    fluid={cover.childImageSharp.fluid}
                    alt={title}
                    imgStyle={{ objectFit: 'cover' }}
                    style={{ height: '50%', width: '100%' }}
                  />
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
                </Link>
              </Styled.BlogCard>
            </motion.div>
          )
        })}
      </Styled.Posts>
    </Styled.Container>
  )
}

export default MyPosts

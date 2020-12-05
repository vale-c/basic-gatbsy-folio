import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import { motion } from 'framer-motion'

import TitleSection from '../UI/TitleSection'

import * as Styled from './styled'

const Projects = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "work section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { category: { eq: "work" }, published: { eq: true } }
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
              tags
            }
          }
        }
      }
    }
  `)

  const projectSectionTitle = markdownRemark.frontmatter
  const projects = allMarkdownRemark.edges

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <TitleSection
          title={projectSectionTitle.title}
          subtitle={projectSectionTitle.subtitle}
          center
        />
        <Styled.Projects>
          {projects.map(item => {
            const {
              id,
              fields: { slug },
              frontmatter: { title, description, tags },
            } = item.node

            return (
              <Styled.Project key={id}>
                <Link to={slug}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Styled.Card>
                      <Styled.Content>
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
              </Styled.Project>
            )
          })}
        </Styled.Projects>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Projects

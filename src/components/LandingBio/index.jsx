import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Image from '../Image'
import * as Styled from './styled'

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <Styled.Container>
        <Styled.ContentWrapper>
          <Styled.HeaderTitle>
            {data.site.siteMetadata.title}
          </Styled.HeaderTitle>
          <Styled.HeaderDescription>
            {data.site.siteMetadata.subtitle}
          </Styled.HeaderDescription>
          <Styled.ImageWrapper>
            <Image fadeIn />
          </Styled.ImageWrapper>
        </Styled.ContentWrapper>
      </Styled.Container>
    )}
  />
)

export default LandingBio

Styled.HeaderTitle.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

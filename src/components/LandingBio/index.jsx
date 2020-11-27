import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Image from "../Image"
import Container from "../UI/Container"
import {
  ContentWrapper,
  HeaderTitle,
  HeaderDescription,
  ImageWrapper,
} from "./styled"

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
      <Container>
        <ContentWrapper>
          <HeaderTitle>{data.site.siteMetadata.title}</HeaderTitle>
          <HeaderDescription>
            {data.site.siteMetadata.subtitle}
          </HeaderDescription>
          <ImageWrapper>
            <Image fadeIn />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    )}
  />
)

export default LandingBio

HeaderTitle.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

import React from "react"
import Img from "gatsby-image"
import SEO from "../components/SEO"
import tw from "tailwind.macro"
import styled from "styled-components"
import { graphql } from "gatsby"
import Header from '../components/Header'

const Title = styled.h1`
  ${tw`text-2xl text-center`}
`
const Message = styled.p`
  ${tw`text-xl text-center`}
`
const Spacer = styled.div`
  ${tw`p-2`}
`
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ImgWrapper = styled.div`
  width: 500px;
`

const NotFoundPage = ({ data }) => (
  <>
    <Header />
    <SEO title="404: Not found" />
    <Title>404: Not Found</Title>
    <Spacer />
    <Message>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Message>
    <Spacer />
    <ContentWrapper>
      <ImgWrapper>
        <Img
          fluid={data.img.childImageSharp.fluid}
          fadeIn
          alt="A funny 404 image"
        />
      </ImgWrapper>
    </ContentWrapper>
  </>
)

export default NotFoundPage

export const query = graphql`
  query {
    img: file(relativePath: { eq: "bitmojis/vale-bitmoji-404.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

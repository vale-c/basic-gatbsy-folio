import Img from "gatsby-image"
import styled from "styled-components"

export const StyledImage = styled(Img)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -16rem;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    transform: rotate(10deg);
    transition-duration: 0.3s;
  }
`

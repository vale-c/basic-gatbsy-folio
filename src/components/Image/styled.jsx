import Img from "gatsby-image"
import styled from "styled-components"

export const StyledImage = styled(Img)`
  &:hover {
    cursor: url("https://cdn.custom-cursor.com/packs/103/ext/Skateboard.png"),
      auto;
    transform: rotate(25deg);
    transition-duration: 0.3s;
  }
`

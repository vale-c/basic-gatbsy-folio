import Img from "gatsby-image"
import styled from "styled-components"

export const StyledImage = styled(Img)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -14.5rem;
  margin-left: 8rem;
  opacity: 0.9;
  &:hover {
    cursor: url('https://cdn.custom-cursor.com/packs/103/ext/Skateboard.png'), auto;
    transform: rotate(10deg);
    transition-duration: 0.3s;
  }
`

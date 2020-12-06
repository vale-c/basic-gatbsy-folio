import Img from 'gatsby-image'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const StyledImage = styled(Img)`
  ${tw`p-16`}
  &:hover {
    cursor: url('https://cdn.custom-cursor.com/packs/103/ext/Skateboard.png'),
      auto;
    transform: rotate(25deg);
    transition-duration: 0.3s;
  }
`

import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

export const Container = styled.div`
  ${tw`container my-12 mx-auto px-4 md:px-12`};
`

export const Title = styled.h1`
  ${tw`font-bold text-xl mt-2 mb-4`};
`

export const Image = styled(Img)`
  ${tw`w-full rounded-lg overflow-hidden mt-5 mb-10 mx-auto`};
`
export const ImgWrapper = styled.div`
  ${tw`text-center`}
  &:hover {
    transform: scale(1.15);
    cursor: pointer;
    transition: ease-in-out;
    transition-duration: 0.8ms;
  }
`
export const Links = styled.div`
  ${tw`w-full flex justify-between mt-10 font-bold`};
`

export const PostLink = styled(Link)`
  ${tw`hover:underline`};
`
export const Wrapper = styled.div`
  ${tw`px-2`}
`

export const Time = styled.div`
  ${tw`text-lg`}
  color: ${({ theme }) => theme.description};
`

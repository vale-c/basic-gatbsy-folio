import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

export const Container = styled.div`
  ${tw`container my-12 mx-auto px-4 md:px-12`}
`
export const Title = styled.h1`
  ${tw`font-bold text-xl mt-2 mb-4`};
`

export const Image = styled(Img)`
  ${tw`w-full rounded-lg overflow-hidden mt-4 mb-10 mx-auto`};
`

export const ImgWrapper = styled.div`
  ${tw`text-center`}
`

export const Links = styled.div`
  ${tw`w-full flex justify-between font-bold mt-16`};
`

export const ProjectLink = styled(Link)`
  ${tw`hover:underline`};
`
export const Wrapper = styled.div`
  ${tw`px-24`}
`

import styled from "styled-components"
import tw from "tailwind.macro"

export const Posts = styled.div`
  ${tw`w-full flex flex-wrap`};
`

export const Post = styled.div`
  ${tw`w-full sm:w-1/2 p-3`};
`

export const Card = styled.div`
  ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
`

export const Content = styled.div`
  ${tw`p-4 text-indigo-900`};
`

export const Image = styled.figure`
  ${tw`w-full`};
`

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`

export const Description = styled.p``

export const Date = styled.h3`
  ${tw`text-xs text-indigo-500`};
`

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`

export const Tag = styled.span`
  ${tw`text-xs text-indigo-900 border border-teal-400 rounded-full px-2 py-1 mr-2`}
`

export const Container = styled.div`
  ${tw`flex flex-wrap max-w-screen-md w-full mx-auto p-5`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`

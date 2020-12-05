import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Projects = styled.div`
  ${tw`flex flex-wrap justify-between -mx-6 `};
`

export const Project = styled.div`
  ${tw`w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink `};
`

export const Card = styled.div`
  border: 2px solid ${({ theme }) => theme.fontAccent};
  ${tw`flex-1 rounded-lg overflow-hidden shadow-lg`};
`

export const Content = styled.div`
  ${tw`p-4`};
`

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`

export const TitleSection = styled.h3`
  ${tw`font-semibold mb-4`};
`
export const Description = styled.p``

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`

export const Tag = styled.span`
  color: ${({ theme }) => theme.description};
  ${tw`text-xs font-bold rounded-full px-2 py-1 mr-2`}
  border: 1px solid ${({ theme }) => theme.fontAccent};
`

export const Wrapper = styled.div`
  ${tw`px-24 m-0`}
`

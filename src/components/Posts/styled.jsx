import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`container my-12 mx-auto px-4 md:px-12`}
`
export const TitleSection = styled.h3`
  ${tw`font-semibold mb-4`};
`

export const Posts = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
  @media (max-width: 797px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

export const BlogCard = styled.div`
  ${tw`shadow-lg rounded`};
  border: 1px solid ${({ theme }) => theme.fontAccent};
  height: 100%;
`

export const Content = styled.div`
  ${tw`p-6`};
`

export const Date = styled.div`
  ${tw`text-sm font-light mb-1`};
  color: ${({ theme }) => theme.description};
`

export const Title = styled.div`
  ${tw`text-lg font-semibold mb-1`};
`

export const Description = styled.p`
  ${tw`text-sm font-medium`};
`

export const Tags = styled.div`
  ${tw`flex items-stretch px-6`}
`

export const Tag = styled.span`
  color: ${({ theme }) => theme.fontAccent};
  ${tw`flex items-center text-xs font-light font-mono p-2 mr-2 mb-12 rounded`}
  border: 1px solid ${({ theme }) => theme.borderAccent};
`

import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`container my-12 mx-auto px-4 md:px-12`}
`
export const TitleSection = styled.h3`
  ${tw`font-semibold mb-4`};
`

export const Posts = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

export const BlogCard = styled.div`
  ${tw`shadow-lg no-underline rounded-sm overflow-hidden mb-32`};
  border: 1px solid ${({ theme }) => theme.fontAccent};
  height: 100%;
`

export const Content = styled.div`
  ${tw`p-6`};
`

export const Date = styled.div`
  ${tw`text-sm font-light mb-2`};
  color: ${({ theme }) => theme.description};
`

export const Title = styled.div`
  ${tw`text-lg font-semibold mb-4`};
`

export const Description = styled.p`
  ${tw`text-sm font-medium mb-4`};
`

export const Tags = styled.div`
  ${tw`flex flex-wrap p-4 mt-auto`}
`

export const Tag = styled.span`
  color: ${({ theme }) => theme.description};
  ${tw`mb-2 text-xs font-bold rounded-full px-2 py-1 mr-2`}
  border: 1px solid ${({ theme }) => theme.fontAccent};
`

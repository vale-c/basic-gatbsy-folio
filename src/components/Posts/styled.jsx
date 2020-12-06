import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`container my-12 mx-auto px-4 md:px-12`}
`

export const Posts = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

export const BlogCard = styled.div`
  ${tw`shadow-lg relative no-underline rounded-lg`};
`

export const Content = styled.div`
  ${tw`p-4`};
`

export const Title = styled.h3`
  ${tw`text-md font-semibold mb-4`};
`
export const TitleSection = styled.h3`
  ${tw`font-semibold mb-4`};
`

export const Image = styled.figure`
  ${tw`w-full`};
`

export const Date = styled.h3`
  ${tw`text-xs`};
  color: ${({ theme }) => theme.description};
`

export const Description = styled.p``

export const Tags = styled.div`
  ${tw`flex flex-wrap p-4 pt-2 mt-auto overflow-hidden`}
`

export const Tag = styled.span`
  color: ${({ theme }) => theme.description};
  ${tw`mb-2 text-xs font-bold rounded-full px-2 py-1 mr-2`}
  border: 1px solid ${({ theme }) => theme.fontAccent};
`

export const Wrapper = styled.div``

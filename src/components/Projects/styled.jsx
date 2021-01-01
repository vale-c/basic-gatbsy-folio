import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`container my-12 mx-auto px-4 md:px-12`}
`
export const Projects = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
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

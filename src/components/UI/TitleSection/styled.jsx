import styled from "styled-components"
import tw from "tailwind.macro"

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full text-3xl`};
`

export const Title = styled.h1`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`

export const SubTitle = styled.h3`
  ${tw`text-sm w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`

export const Separator = styled.h2`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: "";
    ${tw`bg-indigo-500 h-full w-px absolute left-0`};
  }

  &:after {
    content: "";
    ${tw`bg-teal-400 h-6 w-px absolute ml-1`};
  }
`

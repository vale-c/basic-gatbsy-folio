import styled from "styled-components"
import tw from "tailwind.macro"

export const Container = styled.div`
  ${tw`flex flex-wrap max-w-screen-md w-full mx-auto p-5`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`

export const Title = styled.h2`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`

export const SubTitle = styled.h4`
  ${tw`text-xs text-indigo-600 w-full text-left`};
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
export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`

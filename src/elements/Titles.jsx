import styled from 'styled-components'
import tw from 'tailwind.macro'
import { rotateAnimation } from '../styles/animations'
import triangle from '../assets/images/triangle.svg'

export const Title = styled.h1`
  ${tw`text-4xl lg:text-4xl text-white mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation('4s')};
    left: -60px;
    top: 5px;
  }
`

export const Greeting = styled.h1`
  color: ${({ theme }) => theme.description};
  ${tw`text-5xl lg:text-6xl mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`
export const Name = styled.h1`
  ${tw`text-5xl lg:text-6xl mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`

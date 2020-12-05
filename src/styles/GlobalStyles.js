import { createGlobalStyle } from 'styled-components'
import './tailwind.css'
import tw from 'tailwind.macro'

export default createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
    }
    
    h1, h2, h3, h4, h5, h6, a {
        color: ${({ theme }) => theme.fontAccent};
    }

    h1 {
        font-size: ${tw`text-4xl`};
    }

    h2 { 
        font-size: ${tw`text-3xl`};
    }

    h3, h4, h5, h6 {
        font-size: ${tw`text-2xl`};
    }

    p {
        color: ${({ theme }) => theme.description};
        font-size: ${tw`text-xl`};
    }

    a {
        font-size: ${tw`text-base`};
    }

    .react-toggle--checked 
    .react-toggle-track,
    .react-toggle--checked:hover 
    .react-toggle-track {
        background-color: ${({ theme }) => theme.toggle};
    }
`

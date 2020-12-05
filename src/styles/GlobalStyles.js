import { createGlobalStyle } from 'styled-components'
import './tailwind.css'
import tw from 'tailwind.macro'
import './typography.css'

export default createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: 'GT Walsheim thin', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    h1, h2, h3, h4, h5, h6, a {
        color: ${({ theme }) => theme.fontAccent};
    }

    h1 {
        font-family: 'GT Walsheim bold';
        font-size: ${tw`text-4xl`};
    }

    h2 { 
        font-family: 'GT Walsheim bold';
        font-size: ${tw`text-3xl`};
    }

    h3, h4, h5, h6 {
        font-family: 'GT Walsheim medium';
        font-size: ${tw`text-2xl`};
    }

    p {
        color: ${({ theme }) => theme.description};
        font-size: ${tw`text-xl`};
        font-family: 'GT Walsheim light';
    }

    a {
        font-size: ${tw`text-base`};
        font-family: 'GT Walsheim light';
    }

    .react-toggle--checked 
    .react-toggle-track,
    .react-toggle--checked:hover 
    .react-toggle-track {
        background-color: ${({ theme }) => theme.toggle};
    }
`

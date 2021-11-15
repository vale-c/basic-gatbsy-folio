import { createGlobalStyle } from 'styled-components'
import './tailwind.css'
import tw from 'tailwind.macro'
import './typography.css'

export default createGlobalStyle`
    *,
    *:before, 
    *:after {
        box-sizing: inherit;
    }
    
    html {
        background-color: ${({ theme }) => theme.backgroundColor};
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
        box-sizing: border-box;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, 
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'GT Walsheim thin', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    h1, h2, h3, h4, h5, h6, a {
        color: ${({ theme }) => theme.fontAccent};
    }

    h1 {
        font-family: 'GT Walsheim bold', monospace;
        font-size: ${tw`text-4xl`};
    }

    h2 { 
        font-family: 'GT Walsheim bold', monospace;
        font-size: ${tw`text-3xl`};
    }

    h3, h4, h5, h6 {
        font-family: 'GT Walsheim medium', monospace;
        font-size: ${tw`text-2xl`};
    }

    p {
        color: ${({ theme }) => theme.description};
        font-size: ${tw`text-md`};
        font-family: 'GT Walsheim light', monospace;
    }

    a {
        font-size: ${tw`text-base`};
        font-family: 'GT Walsheim light', monospace;
        text-decoration: none;
    }
    
    .react-toggle-track {
      background: ${({ theme }) => theme.toggle};
    }
`

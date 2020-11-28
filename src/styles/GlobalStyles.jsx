import { createGlobalStyle } from "styled-components"
import colors from "../../tailwind"

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.backgroundColor};
    }
    
    body {
        font-family: 'Montserrat', monospace;
        ${tw`flex flex-col min-h-screen`}
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Expletus Sans', monospace;
        color: ${({ theme }) => theme.fontAccent};
    }

    p {
        font-family: 'Expletus Sans', monospace;
        color: ${({ theme }) => theme.description};
    }

    a {
        color: ${({ theme }) => theme.fontAccent};
        font-family: 'Expletus Sans', monospace;
    }

    .react-toggle--checked 
    .react-toggle-track,
    .react-toggle--checked:hover 
    .react-toggle-track {
        background-color: ${theme.underlineAccent};
    }
`

export default GlobalStyles

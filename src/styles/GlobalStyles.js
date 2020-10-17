import { createGlobalStyle } from "styled-components"
import modernNormalize from "styled-modern-normalize"
import colors from './colors'

const GlobalStyles = createGlobalStyle`
    // Import normalize.css
    ${modernNormalize}
    
    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.bgDark};
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: "Chivo", monospace;
    }

    h1, h2, h3 {
        font-family: "Changa One", cursive;
        color: ${({ theme }) => theme.accent};
    }

    p {
        color: ${({ theme }) => theme.description};
    }

    .react-toggle--checked .react-toggle-track,
    .react-toggle--checked:hover .react-toggle-track {
        background-color: ${colors.grey900};
    }

    a {
        color: ${({ theme }) => theme.accent};
    }
`

export default GlobalStyles

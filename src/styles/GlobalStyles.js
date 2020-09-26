import { createGlobalStyle } from "styled-components"
import modernNormalize from "styled-modern-normalize"
import colors from "./colors"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

    // Import normalize.css
    ${modernNormalize}
    * {
        box-sizing: border-box;
    }

    html {
        background-color: ${({ theme }) => theme.bgDark};
    }
    
    body {
        font-size: 22px;
        font-family: 'VT323', monospace;
        color: ${({ theme }) => theme.color};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Fira Sans', sans-serif;
        color: ${({ theme }) => theme.color};
    }

    .react-toggle--checked .react-toggle-track,
    .react-toggle--checked:hover .react-toggle-track {
        background-color: #000000;
    }

    a {
        color: ${({ theme }) => theme.accent};
    }
`

export default GlobalStyles

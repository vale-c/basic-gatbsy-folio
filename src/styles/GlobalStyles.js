import { createGlobalStyle } from "styled-components"
import modernNormalize from "styled-modern-normalize"

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
        font-family: "Chivo", sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Changa One", cursive;
        color: ${({ theme }) => theme.accent};
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

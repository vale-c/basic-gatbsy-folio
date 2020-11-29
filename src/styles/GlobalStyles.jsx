import { createGlobalStyle } from "styled-components"
import colors from "../../tailwind"

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.backgroundColor};
    }
    
    h1, h2, h3, h4, h5, h6, a {
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.fontAccent};
    }

    p {
        font-family: 'Nunito', sans-serif;
        color: ${({ theme }) => theme.description};
    }

    .react-toggle--checked 
    .react-toggle-track,
    .react-toggle--checked:hover 
    .react-toggle-track {
        background-color: ${({ theme }) => theme.toggle};
    }
`

export default GlobalStyles

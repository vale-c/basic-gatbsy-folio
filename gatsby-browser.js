import React from "react"
import { ThemeProvider } from "./src/context/theme-context"
import GlobalStyles from "./src/styles/GlobalStyles"

import "./css-utils/prism-atom-dark.css"
import "./css-utils/prism-line-numbers.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <>
      <GlobalStyles />
      {element}
    </>
  </ThemeProvider>
)

import React from "react"
import { ThemeProvider } from "./src/context/theme-context"
import GlobalStyles from "./src/styles/GlobalStyles"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <>
      <GlobalStyles />
      {element}
    </>
  </ThemeProvider>
)

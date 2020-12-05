import React from 'react'
import { ThemeProvider } from './src/context/theme-context'

import './css-utils/prism-atom-dark.css'
import './css-utils/prism-line-numbers.css'

import './src/styles/tailwind.css'
import GlobalStyles from './src/styles/GlobalStyles'

// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => window.location.reload()

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <GlobalStyles />
    <>{element}</>
  </ThemeProvider>
)

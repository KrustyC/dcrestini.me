import React from 'react'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import OnePage from './onepage'

const App = () => (
  <ThemeProvider theme={theme}>
    <OnePage />
  </ThemeProvider>
)

export default hot(module)(App)

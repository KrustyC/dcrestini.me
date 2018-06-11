import React from 'react'
import { Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { AppRoutes, history } from 'app/router'
import { ThemeProvider } from 'styled-components'

import { GlobalProvider } from './GlobalContext'
import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </Router>
  </ThemeProvider>
)

export default hot(module)(App)

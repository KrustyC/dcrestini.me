import React from 'react'
import { Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { AppRoutes, history } from 'app/router'
import { GlobalProvider } from './GlobalContext'

const App = () => (
  <Router history={history}>
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  </Router>
)

export default hot(module)(App)

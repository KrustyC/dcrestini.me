import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import AppRoutes from './routes'

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)

export default hot(module)(App)

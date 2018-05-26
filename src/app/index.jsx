import React from 'react'
import { Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { AppRoutes, history } from 'app/router'
import Layout from './layout'

const App = () => (
  <Router history={history}>
    <Layout>
      <AppRoutes />
    </Layout>
  </Router>
)

export default hot(module)(App)

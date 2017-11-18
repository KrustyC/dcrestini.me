import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './landing'
import Me from './me'
import NotFound from './not-found'
import '../assets/scss/main.scss'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      {/*<Route path='/me' component={Me} />*/}
      <Route path='*' component={() => (<NotFound />)} />
    </Switch>
  </Router>
)

export default App

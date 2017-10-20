import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './landing'
import Me from './me'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path='/me' component={Me} />
    </div>
  </Router>
)

export default App

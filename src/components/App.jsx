import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './landing'
import Me from './me'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/me' component={Me}/>
    </Switch>
  </div>
)

export default App

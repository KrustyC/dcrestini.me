import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import Portfolio from './portfolio'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/portfolio' component={Portfolio}/>
    </Switch>
  </main>
)

export default Main
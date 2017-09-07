import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../theme/site/assets/main.less'

import Home from './home'
import About from './about'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main
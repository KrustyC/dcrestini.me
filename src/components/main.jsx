import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import Curriculum from './curriculum'
/*
import About from './about'
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
*/
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/curriculum' component={Curriculum}/>
    </Switch>
  </main>
)

export default Main
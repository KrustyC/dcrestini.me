import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import '../../theme/site/assets/main.less'

import Home from './home'
import Roster from './roster'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
)

export default Main
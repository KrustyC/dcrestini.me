import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './shared/navbar'
import Home from './home'
import Portfolio from './portfolio'
import Footer from './shared/footer'

const Me = () => (
  <div>
    <Navbar/>

    <Switch>
      <Route path="/me/about" component={Home} />
      <Route path="/me/portfolio" component={Portfolio} />
    </Switch>

    <Footer/>
  </div>
)

export default Me

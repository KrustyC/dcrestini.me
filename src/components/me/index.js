import React, { Component } from 'react'

import Navbar from './navbar'
import Home from './home'
import Footer from './footer'

// CREARE LAYOUT

class Me extends Component {
  render(){
   return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
    )
  }
}

export default Me

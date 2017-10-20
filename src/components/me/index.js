import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './navbar'
import Home from './home'
import Footer from './footer'

const Me = () => (
  <div>
    <Navbar/>

    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>

    <Footer/>
  </div>
)

export default Me

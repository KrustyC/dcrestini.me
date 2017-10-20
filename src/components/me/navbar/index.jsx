import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

export default class Navbar extends Component {

  render() {

    const links = [
      {
        path: '/me',
        text: 'Home',
        icon: 'fa fa-home'
      },
      {
        path: '/me/about',
        text: 'About',
        icon: 'fab fa-linux'
      },
      {
        path: '/me/portfolio',
        text: 'Portfolio',
        icon: 'fa fa-id-card'
      },
    ]

    return (
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
            { _.map(links, (x, k) => (
              <Link key={k} className="navbar-item is-hidden-mobile" to={x.path} >
                {x.text}
              </Link>)
            ) }
          
           <div className="navbar-burger burger">
            <span/>
            <span/>
            <span/>
           </div>
          </div>
      </nav>
    )
  }
}

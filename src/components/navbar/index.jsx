import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/navbar.scss'

export default class Navbar extends Component {

  render() {

    const links = [
      {
        path: '/',
        text: 'Home',
        icon: 'fa fa-home'
      },
      {
        path: '/about',
        text: 'About',
        icon: 'fab fa-linux'
      },
      {
        path: '/portfolio',
        text: 'Portfolio',
        icon: 'fa fa-id-card'
      },
    ]

    return (
      <nav className="navbar" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
          </a>
        </div>
          <div className="navbar-start">
            { _.map(links, (x, k) => (
              <Link key={k} className="navbar-item" to={x.path} >
              <i className={x.icon}/> &nbsp;{x.text}
              </Link>)
            ) }
          </div>
      </nav>
    )
  }
}

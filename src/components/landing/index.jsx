import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'

class Landing extends Component {
  render(){
   return (
    <div className="landing hero is-large is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="title is-2 has-text-light">
            Hello! I'm Davide Crestini and I'm a software developer.
          </h3>
          <h2 className="subtitle is-4 has-text-light">
            This is my own website, look at what I've been doing, I hope you'll enjoy it!
          </h2>
        </div>

        <div className="row has-text-centered has-button has-text-light">
          <Link to="/me/about" className="button is-outlined is-primary is-inverted is-large">
            <i className="fa fa-wrench"/>&nbsp;Work in progress... 
          </Link>
        </div>
      </div>
    </div>
    )
  }
}

export default Landing

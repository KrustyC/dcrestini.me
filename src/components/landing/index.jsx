import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'

class Landing extends Component {
  render(){
   return (
    <div className="hero is-large is-bold">
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
          <i className="fa fa-wrench fa-2x"/>
          <p className="subtitle is-5 has-text-light">
            <Link to="/me"> Work in progress... </Link>
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default Landing

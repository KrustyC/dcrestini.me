import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'

class Landing extends Component {
  render(){
   return (
    <div className="landing">
      <div className="container">
        <div className="header">
          <span>ubuntu@dcrestini:</span> whoami
        <div/>
        <div>
          <h3 className="title is-1">
            Hello!<br />I'm Davide Crestini and I'm a software developer.
          </h3>
          <h2 className="subtitle is-4 has-text-light">
            This is my own website, look at what I've been doing, I hope you'll enjoy it!
          </h2>
        </div>
      </div>
        </div>
    </div>
    )
  }
}

export default Landing

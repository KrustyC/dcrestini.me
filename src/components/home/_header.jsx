import React, { Component } from 'react'

class HeaderSection extends Component {
  render(){
   return (
    <section className="hero is-large is-primary is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h3 className="title is-2">
            Hello! I'm Davide Crestini and I'm a software developer.
          </h3>
          <h2 className="subtitle is-4">
            This is my own website, look at what I've been doing, I hope you'll enjoy it!
          </h2>
        </div>
      </div>
    </section>
    )
  }
}

export default HeaderSection
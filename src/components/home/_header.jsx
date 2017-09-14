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
            This is my own website, and you are very welcome here!
          </h2>
        </div>
      </div>
    </section>
    )
  }
}

export default HeaderSection
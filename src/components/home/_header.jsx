import React, { Component } from 'react'

class HeaderSection extends Component {
  render(){
   return (
    <section className="hero is-large is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Welcome
          </h1>
          <h2 className="subtitle">
            My name is Davide Crestini and I'm a software developer...
          </h2>
        </div>
      </div>
    </section>
    )
  }
}

export default HeaderSection
import React, { Component } from 'react'

class Quote extends Component {
  render(){
    return (
      <section className="hero is-small is-primary is-bold">
        <div className="hero-body has-text-centered">
          <blockquote>
            "Duis proident velit non velit quis minim ad ut consequat occaecat nulla amet ut in adipisicing est commodo dolore qui in minim"
          </blockquote>
          <br/>
          <span className="author">
            Cit. Me
          </span>
        </div>
      </section>
    )
  }
}

export default Quote
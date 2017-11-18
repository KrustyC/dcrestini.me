import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <section className="hero is-large is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1 has-text-white">404 - Page not found</h1>
        <h2 class="subtitle has-text-white">
          Work in progress... the website we'll be available soon! :)
        </h2>
        <Link to="/" className="button is-primary is-inverted is-outlined is-large">
          <i className="fa fa-home" />{' '}Back to website
        </Link>
      </div>
    </div>
  </section>
)

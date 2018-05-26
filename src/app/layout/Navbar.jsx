import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// @TODO Refactor into uikit components + add icons

const Navbar = ({ toggleTerminal }) => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/portfolio" className="navbar-item">Portfolio</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <button onClick={toggleTerminal} className="button is-primary">
                  <span className="icon">
                    <i className="fas fa-download" />
                  </span>
                  <span>Terminal</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  toggleTerminal: PropTypes.func.isRequired
}

export default Navbar

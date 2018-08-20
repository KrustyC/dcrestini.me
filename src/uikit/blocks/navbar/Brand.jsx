import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Brand = ({ children }) => (
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      {children}
    </Link>
    <div className="navbar-burger burger" data-target="navbar">
      <span />
      <span />
      <span />
    </div>
  </div>
)

Brand.propTypes = {
  children: PropTypes.any.isRequired
}

export default Brand

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Brand = ({ img }) => (
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <img
        src={img}
        alt="Personal website of Davide Crestini"
        width="112"
        height="28"
      />
    </Link>
    <div className="navbar-burger burger" data-target="navbar">
      <span />
      <span />
      <span />
    </div>
  </div>
)

Brand.propTypes = {
  img: PropTypes.string.isRequired
}

export default Brand

import React from 'react'
import PropTypes from 'prop-types'

const Addons = ({ left, right }) => (
  <div className="tags has-addons">
    <span className="tag is-dark">{left}</span>
    <span className="tag is-info">{right}</span>
  </div>
)

Addons.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired
}

export default Addons

import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ children }) => (
  <span className="icon is-small">
    {children}
  </span>
)

Icon.propTypes = {
  children: PropTypes.any.isRequired
}

export default Icon

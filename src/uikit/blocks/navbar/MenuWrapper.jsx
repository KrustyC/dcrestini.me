import React from 'react'
import PropTypes from 'prop-types'

const MenuWrapper = ({ children }) => (
  <div className="navbar-menu">
    {children}
  </div>
)

MenuWrapper.propTypes = {
  children: PropTypes.any.isRequired
}

export default MenuWrapper

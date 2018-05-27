import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({ children, position }) => (
  <div className={`navbar-${position}`}>
    {children}
  </div>
)

Menu.propTypes = {
  position: PropTypes.oneOf(['start', 'end']).isRequired,
  children: PropTypes.any.isRequired
}

export default Menu

import React from 'react'
import PropTypes from 'prop-types'

import Brand from './Brand'
import Button from './Button'
import ButtonContainer from './ButtonContainer'
import Icon from './Icon'
import Link from './Link'
import Menu from './Menu'
import MenuWrapper from './MenuWrapper'


const Navbar = ({ children, transparent }) => (
  <nav className={`navbar is-${transparent ? 'transparent' : 'primary'}`}>
    <div className="container">
      {children}
    </div>
  </nav>
)

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
  transparent: PropTypes.bool
}

Navbar.defaultProps = {
  transparent: false
}

Navbar.Brand = Brand
Navbar.Button = Button
Navbar.ButtonContainer = ButtonContainer
Navbar.Icon = Icon
Navbar.Link = Link
Navbar.Menu = Menu
Navbar.MenuWrapper = MenuWrapper

export default Navbar

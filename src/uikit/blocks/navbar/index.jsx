import React from 'react'
import PropTypes from 'prop-types'

import Brand from './Brand'
import Button from './Button'
import ButtonContainer from './ButtonContainer'
import Icon from './Icon'
import Link from './Link'
import Menu from './Menu'
import MenuWrapper from './MenuWrapper'

const Navbar = ({ children }) => (
  <nav className="navbar is-transparent">
    <div className="container">
      {children}
    </div>
  </nav>
)

Navbar.propTypes = {
  children: PropTypes.any.isRequired
}

Navbar.Brand = Brand
Navbar.Button = Button
Navbar.ButtonContainer = ButtonContainer
Navbar.Icon = Icon
Navbar.Link = Link
Navbar.Menu = Menu
Navbar.MenuWrapper = MenuWrapper

export default Navbar

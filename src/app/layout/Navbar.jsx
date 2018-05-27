import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'uikit'
import { Keyboard } from 'styled-icons/fa-regular/Keyboard'

// @TODO Add icons


const CustomNavbar = ({ toggleTerminal }) => (
  <Navbar>
    <Navbar.Brand img="https://bulma.io/images/bulma-logo.png" />
    <Navbar.MenuWrapper>
      <Navbar.Menu position="start">
        <Navbar.Link to="/" >Home</Navbar.Link>
        <Navbar.Link to="/about" >About</Navbar.Link>
        <Navbar.Link to="/portfolio" >Portfolio</Navbar.Link>
        <Navbar.Link to="/contact" >Contact</Navbar.Link>
      </Navbar.Menu>
      <Navbar.Menu position="end">
        <Navbar.ButtonContainer>
          <Navbar.Button onClick={toggleTerminal} isText>
            <span className="icon is-small" style={{ color: 'white' }}>
              <Keyboard />
            </span>
          </Navbar.Button>
        </Navbar.ButtonContainer>
      </Navbar.Menu>
    </Navbar.MenuWrapper>
  </Navbar>
)

CustomNavbar.propTypes = {
  toggleTerminal: PropTypes.func.isRequired
}

export default CustomNavbar

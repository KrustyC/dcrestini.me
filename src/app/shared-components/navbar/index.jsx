import React from 'react'
import PropTypes from 'prop-types'
import { Keyboard } from 'styled-icons/fa-regular/Keyboard'
import { Navbar } from 'uikit'
import { GlobalConsumer } from 'app/GlobalContext'

const CustomNavbar = ({ transparent }) => (
  <Navbar transparent={transparent} >
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
          <GlobalConsumer>
            {({ toggleTerminal }) => (
              <Navbar.Button onClick={toggleTerminal} isText>
                <span className="icon is-small" style={{ color: 'white' }}>
                  <Keyboard />
                </span>
              </Navbar.Button>
            )}
          </GlobalConsumer>
        </Navbar.ButtonContainer>
      </Navbar.Menu>
    </Navbar.MenuWrapper>
  </Navbar>
)

CustomNavbar.propTypes = {
  transparent: PropTypes.bool
}

CustomNavbar.defaultProps = {
  transparent: false
}

export default CustomNavbar
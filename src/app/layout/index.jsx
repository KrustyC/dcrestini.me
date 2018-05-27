import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import styled from 'styled-components'

import Footer from './Footer'
import Terminal from './Terminal'
import Navbar from './Navbar'

const HomeMain = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('assets/img/homepage.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`


class Layout extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  }

  state = {
    showTerminal: false
  }

  toggleTerminal = () => this.setState(({ showTerminal }) => ({ showTerminal: !showTerminal }))

  render() {
    const { showTerminal } = this.state
    const { children, location: { pathname } } = this.props
    const isHome = pathname === '/'

    return (
      <div>
        {!isHome ? (
          <Fragment>
            <Navbar toggleTerminal={this.toggleTerminal} />
            {children}
            <Footer />
          </Fragment>
        ) : (
          <HomeMain className="hero is-info is-fullheight">
            <div className="hero-head">
              <Navbar toggleTerminal={this.toggleTerminal} />
            </div>
            {children}
          </HomeMain>
        )
        }
        {showTerminal && <Terminal />}
      </div>
    )
  }
}

export default withRouter(Layout)

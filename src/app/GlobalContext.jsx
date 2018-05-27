import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Terminal from './shared-components/terminal'

const GlobalContext = React.createContext()

class GlobalProvider extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  state = {
    showTerminal: false
  }

  toggleTerminal = () => this.setState(({ showTerminal }) => ({ showTerminal: !showTerminal }))

  render() {
    const context = {
      ...this.state,
      toggleTerminal: this.toggleTerminal
    }

    return (
      <GlobalContext.Provider value={context}>
        {this.props.children}
        <Terminal isVisible={this.state.showTerminal} />
      </GlobalContext.Provider>
    )
  }
}

const GlobalConsumer = GlobalContext.Consumer

export { GlobalProvider, GlobalConsumer }

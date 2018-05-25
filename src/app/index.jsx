import React, { Component } from 'react'

export default class App extends Component {
  state = {
    isMounted: false
  }

  componentDidMount() {
    this.setState({ isMounted: true })
  }

  render() {
    const { isMounted } = this.state
    return (
      <div>
        {isMounted ? 'Mounted' : 'Not Mounted'}
        Davide's Website
      </div>
    )
  }
}

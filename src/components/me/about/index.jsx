import React, { Component } from 'react'

import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

class About extends Component {
  render(){
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>ABOUT</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts.</p>

      </Container>
    )
  }
}

export default About
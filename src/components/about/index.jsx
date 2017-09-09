import React, { Component } from 'react'

import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

class About extends Component {
  render(){
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>ABOUT</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>A text container is used for the main container, which is useful for single column layouts.</p>

        <Image src='/assets/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      </Container>
    )
  }
}

export default About
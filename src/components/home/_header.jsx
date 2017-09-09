import React, { Component } from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Button, Icon } from 'semantic-ui-react'

class HeaderSection extends Component {
  render(){
   return (
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <Container text>
            <Header
              as='h1'
              content='Welcome'
              inverted
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
            />
            <Header
              as='h2'
              content="My name is Davide Crestini and I'm a software developer...."
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Button primary size='huge'>
              Read more about me
              <Icon name='right arrow' />
            </Button>
        </Container>
      </Segment>
    )
  }
}

export default HeaderSection
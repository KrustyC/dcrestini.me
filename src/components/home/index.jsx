import React, { Component } from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Button, Icon } from 'semantic-ui-react'

const Home = () => (
  <Container text>
              <Header
                as='h1'
                content='Davide Crestini'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Do whatever you want when you want to.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
)

export default Home
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Button } from 'semantic-ui-react'

export default class Navbar extends Component {
  
  constructor() {
    super()
    this.state = {
      activeItem: 'home'
    }
    
  }

  handleItemClick (e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
       <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/about'>About</Menu.Item>
          
        </Container>
  </Menu>
    )
  }
}
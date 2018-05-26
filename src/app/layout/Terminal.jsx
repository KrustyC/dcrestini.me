import React from 'react'
import get from 'lodash/get'
import styled from 'styled-components'
import ReactTerminal from 'react-bash'
import { history } from 'app/router'

// @TODO create an exit command

const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  z-index: 1000;

  .ReactBash {
    height: 500px !important;
    width: 800px !important;
    border: 1px solid lightgrey;
    box-shadow: 2px 2px 2px 2px #ccc;

    div {
      overflow: hidden !important;
    }
  }
`
const navigate = {
  exec: (state, { args }) => {
    const location = get(args, '0')
    switch (location) {
      case 'home':
        history.push('/')
        break
      case 'about':
        history.push('/about')
        break
      case 'portfolio':
        history.push('/portfolio')
        break
      case 'contact':
        history.push('/contact')
        break
      case '.github':
        window.location.replace('https://github.com/krustyc')
        break
      default:
        // @TODO set an error  flag and print the user that the section doesn't exist
        break
    }
    return state
  }
}

const customHistory = [
  { value: 'Welcome to the terminal!' },
  { value: 'Type `help` to see all available commands!' }
]

const structure = {
  home: { content: 'Just my home' },
  about: { content: 'Read a bit more about me' },
  potfolio: { content: 'Checkout my portofolio to see what I\'ve been working on!' },
  contact: { content: 'Come here if you wann get in touch' },
  '.github': { content: 'Link to my github: https://github.com/krustyc' }
}


const extensions = { navigate }

const Terminal = () => (
  <Box>
    <ReactTerminal
      prefix="user@dcrestini"
      history={customHistory}
      structure={structure}
      extensions={extensions}
    />
  </Box>
)

export default Terminal

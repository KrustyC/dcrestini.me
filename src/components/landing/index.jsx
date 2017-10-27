import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './landing.scss'

class Landing extends Component {
  constructor() {
    super()

    this.state = {
      command: 'Dio mostro'
    }
  }

  onChange(e,val) {
    console.log(e, val)
  }

  render(){
    const { command } = this.state

    const history = [
      '1994 - Born in Sansepolcro',
      '1995 - Started supporting Juventus',
      '2001 - Started using my first computer',
      '2002 - Joined my first Basketball team',
      '2006 - italy won the Wolrd Cup!',
      '2009 - Met my fantastic girlfriend <3',
      '2010 - Started coding...',
      '2013 - Graduated at business at technical school',
      '2016 - Bachelor degree in Computer Science at University of Bologna',
      '2017 - Move to London',
      '2017 - Started Working at School Explained'
    ]


   return (
    <div className="landing">
      <div className="container terminal">
        <div className="terminal-menu">
          <div className="terminal-buttons btn-close" />
          <div className="terminal-buttons btn-minimize" />
          <div className="terminal-buttons btn-zoom" />
        </div>
        <div className="terminal-screen">
          <p className="text">Hello!</p>
          <p className="command">dcrestini:~$ <span>whoami</span></p>
          <p className="text">I'm Davide Crestini and I'm a software developer!</p>
          <p className="command">dcrestini:~$ <span>history</span></p>
          <p className="text">
            {_.map(history, x => <span>{x}<br/></span>)}
          </p>
          <p className="command">dcrestini:~$ <span>man website</span></p>
          <p className="text">Please type "enter" to visit my website</p>
          <p className="command with-cursor">
            dcrestini:~$
            <span
              className="content-editable" contenteditable="true"
              role="input"
              tabIndex="0"
              onChange={(e) => this.onChange(e)}
            >
              {command}
            </span>
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default Landing

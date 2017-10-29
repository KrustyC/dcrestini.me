import _ from 'lodash'
import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router-dom'
import './landing.scss'

class Landing extends Component {
  
   onKeyPress(event){
    if(event.keyCode === 13) {
      console.log("Press enter button! Redirect...")
      this.props.history.push('/me/about')
      //browserHistory.push('/me/about')
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", (e) => this.onKeyPress(e));
  }

  render(){
    const history = [
      '1994 - Born in Sansepolcro',
      '1995 - Started supporting Juventus',
      '2001 - Used computer for the first time',
      '2002 - Joined my first Basketball team',
      '2006 - Italy won the World Cup!',
      '2009 - Met my fantastic girlfriend <3',
      '2010 - Started coding...',
      '2013 - Graduated at business at technical school',
      '2016 - BA in Computer Science at University of Bologna',
      '2017 - Move to London',
      '2017 - Started Working at School Explained'
    ]


   return (
    <div className="landing is-primary">
      <div className="container terminal">
        <div className="terminal-menu">
          <div className="terminal-buttons btn-close" />
          <div className="terminal-buttons btn-minimize" />
          <div className="terminal-buttons btn-zoom" />
        </div>
        <div className="terminal-screen">
          <p className="command">dcrestini:~$ <span>whoami</span></p>
          <p className="text">Hello! My name is Davide Crestini and I'm a software developer!</p>
          <p className="command">dcrestini:~$ <span>history</span></p>
          <p className="text">
            {_.map(history, (x, k) => <span key={k}>{x}<br/></span>)}
          </p>
          <p className="command">dcrestini:~$ <span>man website</span></p>
          <p className="text">[?] To visit the website just press "Enter[↵]"</p>
          <p className="command with-cursor">
            dcrestini:~$
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default Landing

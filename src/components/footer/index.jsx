import _ from 'lodash'
import React, { Component } from 'react'

class About extends Component {
  getLinks() {
    return [ 
      { value: 'GitHub', icon: 'github', link: 'https://github.com/KrustyC', color: '#333333'},
      { value: 'LinkedIn', icon: 'linkedin-in', link: 'https://www.linkedin.com/in/davide-crestini-833aa011a/', color: '#007bb5' },
      { value: 'Facebook', icon: 'facebook-f', link: 'https://www.facebook.com/davide.crestini.1?ref=bookmarks', color: '#3b5998' }
    ]
  }

  render(){
   return (
    <footer className="footer">
      <div className="hero">
        <div className="hero-body columns">
          <div className="column is-4">
            <div>
              <strong> Find me on </strong>
            </div>
            <div>
              <ul>
              {
                _.map(this.getLinks(), x => (
                  <li>
                    <a href={x.link} target="_blank">
                      <span className="fa-layers">
                        <i
                          style={{color: x.color}}
                          className={`fab fa-${x.icon} fa-2x`}
                          data-fa-transform="shrink-6"
                          data-fa-compose="fa fa-circle"
                        />
                        <span className="fa-layers-text" data-fa-transform="shrink-1 right-55">{x.value}</span>
                    </span>
                    </a>
                  </li>
                ))
              }
              </ul>
            </div>
          </div>
          
          <div className="column is-4">
            <div>
              <strong> Get in touch </strong>
            </div>
            <div>
              <ul>
                <li> <i className="fa fa-envelope"/> davide.crestini94@gmail.com </li>
                <li> <i className="fa fa-phone"/> +44 0774 5149793 </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <div className="has-text-centered">
              Copyright © 2017 Davide Crestini
              <br/>
              <small>HTML5 | CSS3 | JavaScript | NodeJs | PHP | Front-End Development | Back-End Development | DevOps </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
        )
    }
}

export default About
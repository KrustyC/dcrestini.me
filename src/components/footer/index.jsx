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
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="tile is-vertical">
              <strong> Find me on </strong>
            </div>
            <br/>
            <div>
            {
              _.map(this.getLinks(), x => (
                <div className="social">
                  <a className="social-link " href={x.link} target="_blank">
                    <span className="fa-layers">
                      <i
                        style={{color: x.color}}
                        className={`fab fa-${x.icon} fa-3x`}
                        data-fa-transform="shrink-6"
                        data-fa-compose="fa fa-circle"
                      />
                      <span className="fa-layers-text" data-fa-transform="shrink-1 right-75">{x.value}</span>
                  </span>
                  </a>
                </div>
              ))
            }
            </div>
          </div>
          <div className="column is-4">
            
          </div>
          <div className="column is-4">
           
          </div>
        </div>
      </div>
    </footer>
        )
    }
}

export default About
import _ from 'lodash'
import React, { Component } from 'react'

class Interests extends Component {
  
  getInterests() {
    return [
      { value:'Sport', icon: 'fa fa-futbol'},
      { value:'Travelling', icon: 'fa fa-globe'},
      { value:'Food', icon: 'fa fa-utensils'}
    ]
  }

  render(){
    return (
     <section className="hero is-bold icon-menu">
      <div className="hero-header has-text-centered">
        <h1 className="title">Interests</h1>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="tile is-ancestor has-text-centered">
          {
            _.map( this.getInterests(), x => (
              <div className="tile is-child has-text-centered">
                <div className="content">
                  <i className={`${x.icon} fa-5x`}/> 
                </div>
                <div className="content has-text-centered image">
                  {x.value}
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default Interests
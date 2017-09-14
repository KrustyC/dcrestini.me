import _ from 'lodash'
import React, { Component } from 'react'

class Interests extends Component {
  
  getInterests() {
    return [
      { value:'Coding', icon: 'fa fa-code'},
      { value:'Sport', icon: 'fa fa-futbol'},
      { value:'Travelling', icon: 'fa fa-globe'},
      { value:'Food', icon: 'fa fa-utensils'}
    ]
  }

  render(){
    return (
     <section className="hero is-primary is-bold interests">
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
      <div className="hero-foot">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>
                <button className="button is-primary is-outlined is-inverted">
                <i className="fa fa-hand-point-right" /> &nbsp; Discover more about my interests
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default Interests
import React, { Component } from 'react'

class Overview extends Component {

  getData() {
    return {
      interests: [
        { value:'Front-End Development', icon: 'fa fa-browser'},
        { value:'Back-End Development', icon: 'fa fa-laptop'},
        { value:'DevOps', icon: 'fa fa-cogs'}
      ],
      languages: [
        { value:'JavaScript', icon: 'fab fa-js-square'},
        { value:'Php', icon: 'fa fa-leaf'},
        { value:'Python', icon: 'fab fa-python'}
      ],
      technologies: [
        { value:'MySQL', icon: 'fa fa-database'},
        { value:'Linux Platform', icon: 'fab fa-linux'},
        { value:'Aws', icon: 'fab fa-aws'}
      ]
    }
  }

  render(){
    const { interests, languages, technologies } = this.getData()

    return (
     <section className="hero is-primary is-bold icon-menu">
      <div className="hero-header has-text-centered">
        <h1 className="title">Overview</h1>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="tile is-ancestor has-text-centered">
          {
            _.map( interests, x => (
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
        <div className="container intermediate">
          <div className="tile is-ancestor has-text-centered">
          {
             _.map( languages, x => (
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
        <div className="container intermediate">
          <div className="tile is-ancestor has-text-centered">
          {
            _.map( technologies, x => (
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
                <i className="fa fa-id-card" /> &nbsp; Portfolio
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

export default Overview
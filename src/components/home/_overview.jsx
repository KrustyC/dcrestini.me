import React, { Component } from 'react'

class Overview extends Component {
  render(){
    return (
      <section className="hero is-medium is-bold">
        <div className="hero-body about">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child has-text-centered">
                <p className="title">Overview</p>
                <p className="subtitle">A brief overview of my favourite technologies</p>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis posuere semper. Ut ornare, tellus eget aliquam semper, ipsum tortor fermentum libero, malesuada consectetur ex diam in neque. Vivamus sed lectus a nulla pellentesque suscipit. Integer commodo ante eu fringilla viverra. Aliquam elementum condimentum leo, sit amet feugiat augue interdum non. Donec et mi lobortis dolor cursus dictum. Morbi sit amet felis nibh. Vestibulum varius augue in lorem interdum cursus. Quisque ac tellus nibh. Pellentesque nec eros at velit tempor semper. Quisque gravida libero sed odio dictum, at tempor lacus consequat. Aliquam ut sem facilisis, congue augue nec, laoreet est. Quisque quis dolor at est feugiat dictum. Phasellus id interdum purus.
                  </div>
                    <a className="button is-primary is-outlined">
                      <i className="fa fa-hand-point-right" /> &nbsp; Discover more
                    </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Overview
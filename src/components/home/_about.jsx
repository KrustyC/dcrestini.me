import React, { Component } from 'react'

class About extends Component {
  render(){
   return (
     <section className="hero is-medium is-bold">
      <div className="hero-body" style={{padding:'4rem'}}>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification is-3">
              <figure className="image is-4by3">
                <img src="http://i.dailymail.co.uk/i/pix/2017/03/15/10/3E462B0200000578-4315748-image-a-10_1489575218052.jpg" />
              </figure>
            </article>
            <article className="tile is-child notification is-9">
              <p className="title">About me</p>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis posuere semper. Ut ornare, tellus eget aliquam semper, ipsum tortor fermentum libero, malesuada consectetur ex diam in neque. Vivamus sed lectus a nulla pellentesque suscipit. Integer commodo ante eu fringilla viverra. Aliquam elementum condimentum leo, sit amet feugiat augue interdum non. Donec et mi lobortis dolor cursus dictum. Morbi sit amet felis nibh. Vestibulum varius augue in lorem interdum cursus. Quisque ac tellus nibh. Pellentesque nec eros at velit tempor semper. Quisque gravida libero sed odio dictum, at tempor lacus consequat. Aliquam ut sem facilisis, congue augue nec, laoreet est. Quisque quis dolor at est feugiat dictum. Phasellus id interdum purus.
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default About
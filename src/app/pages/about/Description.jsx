import React from 'react'
import { HangingPicture } from 'uikit'

const Description = () => (
  <div className="hero is-large">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <HangingPicture />
          </div>
          <div className="column is-6 is-offset-1">
            <h1 className="title is-2">About me</h1>
            <h2 className="subtitle is-9">
              I'm a full stack web developer. I come from Sansepolcro, a small village in the middle
              of Italy. I'm currently living in London but before coming here I lived for
              3 years in Bologna where I studied Computer Science at the University of Bologna.
              I started coding when I was about 17 at school and since then my passion for the
              IT world has continuosly increased.
              <br />
              A part from coding I love playing every kind of sport even though footbal and
              basketball are my favourite one. Back in Italy I played basketball with the local
              team of Sansepolcro for 8 years. I love hanging out and chat to new people, even
              better if in front of a coldbeer!
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>

)

export default Description

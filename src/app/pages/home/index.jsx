import React from 'react'
import Navbar from 'app/shared-components/navbar'
import styled from 'styled-components'

const Layout = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url('assets/img/homepage.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const Home = () => (
  <Layout className="hero is-info is-fullheight">
    <div className="hero-head">
      <Navbar />
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-8 is-offset-2">
          <h1 className="title">Hi I'm Davide Crestini and I'm a software developer!</h1>
          <h2 className="subtitle">
            Here I'll show some all the stuff I've been working on...
          </h2>
          <button className="button is-large is-rounded is-link">Check It Out!</button>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home

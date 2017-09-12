import React, { Component } from 'react';
import '../../assets/home.scss'


import Header from './_header'
import About from './_about'
import Cv from './_cv'

import '../../assets/home.scss'


/*
import Quote from './_quote'
    <About />
    <Quote />
    <Cv />
*/

const Home = () => (
  <div>
    <Header />
    <About />
    <Cv />
  </div>

)

export default Home
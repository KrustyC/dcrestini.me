import React, { Component } from 'react';
import '../../assets/home.scss'


import Header from './_header'
import About from './_about'
import Interesets from './_interests'
import Overview from './_overview'
import Quote from './_quote'

import '../../assets/home.scss'


const Home = () => (
  <div>
    <Header />
    <About />
    <Interesets />
    <Overview />
    <Quote />
  </div>

)

export default Home
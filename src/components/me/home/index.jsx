import React, { Component } from 'react';
import './home.scss'


import Header from './_header'
import About from './_about'
import Interesets from './_interests'
import Overview from './_overview'
import Quote from './_quote'

const Home = () => (
  <div>
    <Header />
    <About />
    <Overview />
    <Interesets />
    <Quote />
  </div>

)

export default Home
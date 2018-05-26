import loadable from 'loadable-components'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = loadable(() => import(/* webpackChunkName: "home" */ 'pages/home'))
const About = loadable(() => import(/* webpackChunkName: "about" */ 'pages/about'))
const Portfolio = loadable(() => import(/* webpackChunkName: "portfolio" */ 'pages/portfolio'))
const Contact = loadable(() => import(/* webpackChunkName: "contact" */ 'pages/contact'))
const NotFound = loadable(() => import(/* webpackChunkName: "not-found" */ 'pages/not-found'))

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
)

export default AppRoutes

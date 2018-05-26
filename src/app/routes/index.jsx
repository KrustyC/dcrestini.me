import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import * as Routes from './routes'

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Routes.Home} />
    <Route path="/about" component={Routes.About} />
    <Route path="/portfolio" component={Routes.Portfolio} />
    <Route path="/contact" component={Routes.Contact} />
    <Route component={Routes.NotFound} />
  </Switch>
)

export default AppRoutes

import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Search from './views/Search'
import Apps from './views/Apps'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/apps" />
          <Route path="/apps" component={Apps} />
          <Route exact path="/search" component={Search} />
        <Redirect to="/apps" />
      </Switch>
    </BrowserRouter>
  )
}

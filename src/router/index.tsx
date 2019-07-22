import * as React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from 'components/header/Header'
import Tabbar from 'components/tabbar/Tabbar'
import NewSong from 'pages/newSong/NewSong'

export default class RouteConfig extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Redirect path="/" to="/home/newsong" />
        <Route path="/home" component={Header} />
        <Route path="/home" component={Tabbar} />
        <Switch>
          <Route path="/home/newsong" component={NewSong} />
        </Switch>
      </HashRouter>
    )
  }
}

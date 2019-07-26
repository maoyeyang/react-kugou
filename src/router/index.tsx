import * as React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from 'components/header/Header'
import Tabbar from 'components/tabbar/Tabbar'
import Player from 'components/player/Player'
import NewSong from 'pages/newSong/NewSong'
import Rank from 'src/pages/rank/Rank'
import SongInfo from 'pages/songInfo/SongInfo'
import Audio from 'components/audio/Audio'

export default class RouteConfig extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Redirect path="/" to="/home/newsong" />
        <Route path="/home" component={Header} />
        <Route path="/home" component={Tabbar} />
        <Switch>
          <Route path="/home/newsong" exact={true} component={NewSong} />
          <Route path="/home/ranklist" exact={true} component={Rank} />
          <Route path="/songinfo" exact={true} component={SongInfo} />
          <Route path="/rank/info/:rankid" exact={true} component={SongInfo} />
        </Switch>
        <Route path="/" component={Player} />
        <Route path="/" component={Audio} />
      </HashRouter>
    )
  }
}

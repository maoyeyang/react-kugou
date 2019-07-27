import * as React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from 'components/header/Header'
import Tabbar from 'components/tabbar/Tabbar'
import Player from 'components/player/Player'
import NewSong from 'pages/newSong/NewSong'
import Rank from 'pages/rank/Rank'
import PList from 'pages/pList/PList'
import SingerClass from 'pages/singerClass/SingerClass'
import SingerList from 'pages/singerList/SingerList'
import SingerInfo from 'pages/singerInfo/SingerInfo'
import SongInfo from 'pages/songInfo/SongInfo'
import RankInfo from 'pages/rankInfo/RankInfo'
import PListInfo from 'pages/pListInfo/PListInfo'
import Search from 'pages/search/Search'
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
          <Route path="/home/plist" exact={true} component={PList} />
          <Route path="/home/singer" exact={true} component={SingerClass} />
          <Route path="/songinfo" exact={true} component={SongInfo} />
          <Route path="/search" exact={true} component={Search} />
          <Route path="/rank/info/:rankid" exact={true} component={RankInfo} />
          <Route
            path="/singer/info/:singerid"
            exact={true}
            component={SingerInfo}
          />
          <Route
            path="/singer/list/:classid"
            exact={true}
            component={SingerList}
          />
          <Route
            path="/plist/info/:specialid"
            exact={true}
            component={PListInfo}
          />
        </Switch>
        <Route path="/" component={Player} />
        <Route path="/" component={Audio} />
      </HashRouter>
    )
  }
}

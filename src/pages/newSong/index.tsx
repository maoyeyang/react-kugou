import * as React from 'react'
import { connect } from 'react-redux'
import './index.styl'
import { withRouter, RouteComponentProps } from 'react-router-dom'

type PathParamsType = {}
type NewSongModel = RouteComponentProps<PathParamsType> & {}

class NewSong extends React.PureComponent<NewSongModel, {}> {
  public render() {
    return <div className="new-song">轮播</div>
  }
}

export default withRouter(
  connect(
    null,
    null
  )(NewSong)
)

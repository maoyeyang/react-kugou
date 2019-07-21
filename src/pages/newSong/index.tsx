import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import './index.styl'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import SliderImg from 'components/sliderImg'
import * as actions from 'store/actions'

type PathParamsType = {}
type NewSongModel = RouteComponentProps<PathParamsType> & {
  getNewSongData: () => void
}

class NewSong extends React.PureComponent<NewSongModel, {}> {
  public render() {
    return (
      <div className="new-song">
        <SliderImg />
      </div>
    )
  }
  public componentDidMount() {
    this.props.getNewSongData()
  }
}

const mapDispatch = (dispatch: Dispatch) => ({
  getNewSongData() {
    actions.getNewSongData()(dispatch)
  }
})

export default withRouter(
  connect(
    null,
    mapDispatch
  )(NewSong)
)

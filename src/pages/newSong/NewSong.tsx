import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import styles from './newSong.module.styl'
import SliderImg from 'components/sliderImg/SliderImg'
import SongList from 'components/songList/SongList'
import Scroll from 'common/components/scroll/Scroll'
import * as actions from 'store/actions'

type NewSongModel = {
  newSong: any
  play: boolean
  getNewSongData: (newSong: Object) => void
}

class NewSong extends React.PureComponent<NewSongModel, {}> {
  public render() {
    return (
      <div
        className={styles.newSong + ' ' + (this.props.play ? styles.play : '')}
      >
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>
            <SliderImg />
            <SongList styleType={1} data={this.props.newSong.toJS().data} />
          </div>
        </Scroll>
      </div>
    )
  }
  public componentDidMount() {
    this.props.getNewSongData(this.props.newSong)
  }
}
const mapState = (state: any) => {
  return {
    newSong: state.getIn(['newSong']),
    play: JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}'
  }
}

const mapDispatch = (dispatch: Dispatch) => ({
  getNewSongData(newSong: Object) {
    actions.getNewSongData(newSong)(dispatch)
  }
})

export default connect(
  mapState,
  mapDispatch
)(NewSong)

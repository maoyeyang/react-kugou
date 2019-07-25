import * as React from 'react'
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import { Dispatch } from 'redux'

class Audio extends React.PureComponent<any, any> {
  player: any
  constructor(props: any) {
    super(props)
    this.player = null
  }
  public render() {
    const player = this.props.player.toJS()
    return <audio src={player.playInfo.url} autoPlay={true} ref="audio" />
  }
  public componentDidUpdate() {
    this.player = this.props.player.toJS()
    const audio = this.refs.audio as any
    if (JSON.stringify(this.player.playInfo) === '{}') return
    if (this.player.lyric.state) {
      audio.play()
    } else {
      audio.pause()
    }
  }
  public componentDidMount() {
    const audio = this.refs.audio as any
    audio.addEventListener('ended', () => {
      this.props.playSong({
        hash: this.player.playInfo.hash,
        type: 'next',
        data: this.player.playerList
      })
    })
  }
}

const mapState = (state: any) => {
  return {
    player: state.getIn(['global', 'player'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    playSong: (payload: any) => actions.getPlaySongData(payload)(dispatch)
  }
}
export default connect(
  mapState,
  mapDispath
)(Audio)

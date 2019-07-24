import * as React from 'react'
import { connect } from 'react-redux'

class Audio extends React.PureComponent<any, any> {
  public render() {
    const player = this.props.player.toJS()
    return <audio src={player.playInfo.url} autoPlay={true} ref="audio" />
  }
  public componentDidUpdate() {
    const player = this.props.player.toJS()
    const audio = this.refs.audio as any
    if (JSON.stringify(player.playInfo) === '{}') return
    if (player.lyric.state) {
      audio.play()
    } else {
      audio.pause()
    }
  }
}

const mapState = (state: any) => {
  return {
    player: state.getIn(['global', 'player'])
  }
}
export default connect(
  mapState,
  null
)(Audio)

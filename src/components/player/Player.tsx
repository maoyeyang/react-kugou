import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import styles from './player.module.styl'

class Player extends React.PureComponent<any, any> {
  public render() {
    const player = this.props.player.toJS()
    const showStatus = this.props.location.pathname === '/songinfo'
    return (
      JSON.stringify(player.playInfo) !== '{}' && (
        <div
          className={styles.player + ' ' + (showStatus ? styles.hidden : '')}
        >
          <audio src={player.playInfo.url} autoPlay={true} ref="audio" />
          <div
            className={styles.left}
            onClick={() => {
              this.goSongInfo()
            }}
          >
            <img
              src={player.playInfo.imgUrl.replace('{size}', 200)}
              className={styles.img}
            />
            <div className={styles.text}>
              <p className={styles.songName}>{player.playInfo.songName}</p>
              <p className={styles.singer}>{player.playInfo.singerName}</p>
            </div>
          </div>
          <div className={styles.right}>
            <i
              className={
                styles.icon + ' ' + (player.isPlay ? styles.play : styles.pause)
              }
              onClick={() => {
                this.playPause()
              }}
            />
            <i className={styles.iconNext} />
            <i className={styles.iconDownLoad} />
          </div>
        </div>
      )
    )
  }
  public goSongInfo = () => {
    this.props.history.push('/songinfo')
  }
  public playPause = () => {
    const audio = this.refs.audio as any
    if (audio.paused) {
      audio.play()
      this.props.playPause()
    } else {
      audio.pause()
      this.props.playPause()
    }
  }
}

const mapState = (state: any) => {
  return {
    player: state.getIn(['global', 'player'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    playPause: () => dispatch(actions.playPause())
  }
}

export default connect(
  mapState,
  mapDispath
)(Player)

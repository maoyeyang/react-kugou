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
                styles.icon +
                ' ' +
                (player.lyric.state ? styles.play : styles.pause)
              }
              onClick={() => {
                this.playPause(player.lyric)
              }}
            />
            <i
              className={styles.iconNext}
              onClick={() => {
                this.props.playSong({
                  hash: player.playInfo.hash,
                  type: 'next',
                  data: player.playerList
                })
              }}
            />
            <i className={styles.iconDownLoad} />
          </div>
        </div>
      )
    )
  }
  public goSongInfo = () => {
    this.props.history.push('/songinfo')
  }
  public playPause = (lyric: any) => {
    if (this.props.player.toJS().playInfo) {
      this.props.playPause(lyric)
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
    playPause: (lyric: any) => dispatch(actions.playPause(lyric)),
    playSong: (payload: any) => actions.getPlaySongData(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(Player)

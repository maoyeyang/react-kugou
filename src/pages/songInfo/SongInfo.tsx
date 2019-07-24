import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import styles from './songInfo.module.styl'
import GoBack from 'components/goBack/GoBack'
import ScrollLyric from 'common/components/scrollLyric/ScrollLyric'

type songInfoModel = {
  player: any
  playPause: any
}

class SongInfo extends React.PureComponent<songInfoModel, {}> {
  public render() {
    const player = this.props.player.toJS()
    console.log(player)
    let style
    if (player.playInfo.imgUrl) {
      style = {
        backgroundImage: `url(${player.playInfo.imgUrl &&
          player.playInfo.imgUrl.replace('{size}', 200)})`
      }
    }

    return (
      <div className={styles.songInfo}>
        <div className={styles.filter} style={style} />
        <div className={styles.bgc} />
        <GoBack text={player.playInfo.songName} />
        <div className={styles.content}>
          <ScrollLyric scrollStyle={styles.lyric}>
            <div className={styles.all}>
              {player.lyric.lines.map((item: any, index: number) => (
                <div
                  key={index}
                  className={
                    styles.item +
                    ' ' +
                    (player.lyric.curNum === index ? styles.active : '')
                  }
                >
                  {item.txt}
                </div>
              ))}
            </div>
          </ScrollLyric>
          <div className={styles.bottom}>
            <div className={styles.playOperate}>
              <i className={styles.btnPrev} />
              <i
                className={
                  styles.btnPlayPause +
                  ' ' +
                  (player.lyric.state ? styles.play : styles.pause)
                }
                onClick={() => {
                  this.playPause(player.lyric)
                }}
              />
              <i className={styles.btnNext} />
            </div>
          </div>
        </div>
      </div>
    )
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
    playPause: (lyric: any) => dispatch(actions.playPause(lyric))
  }
}

export default connect(
  mapState,
  mapDispath
)(SongInfo)

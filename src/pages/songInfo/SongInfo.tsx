import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import styles from './songInfo.module.styl'
import GoBack from 'components/goBack/GoBack'
import * as Lyric from 'common/js/lyric'
import BScroll from 'better-scroll'

type songInfoModel = {
  player: any
  playPause: Function
  changeCurNum: Function
  playSong: Function
}

interface scrollState {
  click: boolean
  probeType: number
}

class SongInfo extends React.PureComponent<songInfoModel, scrollState> {
  wrapper: any
  wrapperBs: any
  timer: any
  heightList: [number]
  constructor(props: songInfoModel) {
    super(props)
    this.wrapper = React.createRef()
    this.wrapperBs = null
    this.timer = null
    this.heightList = [0]
    this.state = {
      click: true,
      probeType: 1
    }
  }
  public render() {
    const player = this.props.player.toJS()
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
        <GoBack text={player.playInfo.songName || '暂无播放歌曲'} />
        <div className={styles.content}>
          <div className={styles.lyric} ref={this.wrapper}>
            <div className={styles.all}>
              {player.lyric.lines.map((item: any, index: number) => (
                <div
                  key={index}
                  className={
                    styles.item +
                    ' ' +
                    (player.lyric.curNum === index ? styles.active : '')
                  }
                  ref={'lyricLine-' + index}
                >
                  {item.txt}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.timeWrap}>
              <div className={styles.timeshow}>{'03:51'}</div>
              <div className={styles.progressWrap}>
                <div className={styles.progress}>
                  <span />
                </div>
              </div>
              <div className={styles.time}>{'05:32'}</div>
            </div>
            <div className={styles.playOperate}>
              <i
                className={styles.btnPrev}
                onClick={() => {
                  this.props.playSong({
                    hash: player.playInfo.hash,
                    type: 'prev',
                    data: player.playerList
                  })
                }}
              />
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
              <i
                className={styles.btnNext}
                onClick={() => {
                  this.props.playSong({
                    hash: player.playInfo.hash,
                    type: 'next',
                    data: player.playerList
                  })
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  _initScroll() {
    if (!this.wrapper.current) {
      return
    }
    this.wrapperBs = new BScroll(this.wrapper.current, {
      probeType: this.state.probeType,
      click: this.state.click
    })
  }
  _initHeightList() {
    this.heightList = [0]
    for (let item in this.refs) {
      const height = this.refs[item] as any
      this.heightList.push(
        height.scrollHeight + this.heightList[this.heightList.length - 1]
      )
    }
  }
  public componentWillUnmount() {
    this.timer && clearInterval(this.timer)
  }
  public componentWillUpdate(a: any) {
    if (
      this.props.player.toJS().playInfo.songName !==
      a.player.toJS().playInfo.songName
    ) {
      this.wrapperBs.refresh()
      this._initHeightList()
    }
    return true
  }
  public componentDidMount() {
    let h = this.wrapper.current.clientHeight / 2
    let w = this.wrapper.current.clientWidth / 2
    setTimeout(() => {
      this._initScroll()
      this._initHeightList()
    }, 20)
    this.timer = setInterval(() => {
      let nowNum = Lyric.show(this.props.player.toJS().lyric)
      let num = this.props.player.toJS().lyric.curNum
      if (nowNum !== num) {
        this.props.changeCurNum()
        this.wrapperBs &&
          this.wrapperBs.scrollTo(0, -this.heightList[nowNum] - w + h, 1000)
      }
    }, 300)
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
    changeCurNum: () => dispatch(actions.changeCurNum()),
    playSong: (payload: any) => actions.getPlaySongData(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(SongInfo)

import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import styles from './songInfo.module.styl'
import GoBack from 'components/goBack/GoBack'
import BScroll from 'better-scroll'
import { getSongTime } from 'common/js/time'

interface songInfoProps {
  player: any
  playPause: Function
  playSong: Function
}

interface songInfoState {
  click: boolean
  probeType: number
  width: string
}

class SongInfo extends React.PureComponent<songInfoProps, songInfoState> {
  wrapper: any
  wrapperBs: any
  heightList: [number]
  isMove: boolean
  constructor(props: songInfoProps) {
    super(props)
    this.wrapper = React.createRef()
    this.wrapperBs = null
    this.heightList = [0]
    this.isMove = true
    this.state = {
      click: true,
      probeType: 1,
      width: '0%'
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
    const allTime = getSongTime(player.playInfo.timeLength)
    const nowTime = getSongTime(parseInt(player.lyric.currentTime))
    let styleSpan = {
      width: this.state.width
    }
    return (
      <div className={styles.songInfo}>
        <div className={styles.filter} style={style} />
        <div className={styles.bgc} />
        <GoBack
          styleType={false}
          text={player.playInfo.songName || '暂无播放歌曲'}
        />
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
            <div
              className={styles.timeWrap}
              onTouchStart={e => {
                this.onProgressStart(e)
              }}
              onTouchMove={e => {
                this.onProgressMove(e)
              }}
              onTouchEnd={e => {
                this.onProgressEnd(e)
              }}
            >
              <div className={styles.timeshow}>{nowTime}</div>
              <div className={styles.progressWrap} ref="progress">
                <div className={styles.progress} style={styleSpan}>
                  <span />
                </div>
              </div>
              <div className={styles.time}>{allTime}</div>
            </div>
            <div className={styles.playOperate}>
              <i
                className={styles.btnPrev}
                onClick={() => {
                  if (!player.playInfo.hash) return
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
                  this.playPause()
                }}
              />
              <i
                className={styles.btnNext}
                onClick={() => {
                  if (!player.playInfo.hash) return
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
  _scrollTo(index: number) {
    if (!this.wrapper.current) return
    let h = this.wrapper.current.clientHeight / 2
    let w = this.wrapper.current.clientWidth / 2
    if (this.wrapperBs) {
      this.wrapperBs.stop()
      this.wrapperBs.scrollTo(0, -this.heightList[index] - w + h - 40, 1000)
    }
  }
  _touch(e: any) {
    this.isMove = false
    const progress = this.refs.progress as HTMLElement
    const left = progress.offsetLeft
    const width = progress.offsetWidth
    const x = e.changedTouches[0].clientX
    let percentage = (x - left) / width
    if (left + width < x) {
      percentage = 1
    }
    if (x < left) {
      percentage = 0
    }
    return percentage
  }
  onProgressStart(e: any) {
    const percentage = this._touch(e) * 100 + '%'
    this.setState({
      width: percentage
    })
  }
  onProgressMove(e: any) {
    const percentage = this._touch(e) * 100 + '%'
    this.setState({
      width: percentage
    })
  }
  onProgressEnd(e: any) {
    const percentage = this._touch(e)
    if (!this.props.player.toJS().playInfo.hash) {
      this.isMove = true
      return
    }
    const time = percentage * this.props.player.toJS().playInfo.timeLength
    const audio = document.getElementsByTagName('audio')[0] as any
    audio.currentTime = time
    this.setState(
      {
        width: percentage * 100 + '%'
      },
      () => {
        this.isMove = true
      }
    )
  }
  public componentWillUpdate(nextProps: any) {
    if (
      this.props.player.toJS().playInfo.hash !==
      nextProps.player.toJS().playInfo.hash
    ) {
      this.wrapperBs.refresh()
      this._initHeightList()
    }
    if (
      this.props.player.toJS().lyric.curNum !==
      nextProps.player.toJS().lyric.curNum
    ) {
      this._scrollTo(nextProps.player.toJS().lyric.curNum)
    }
    const player = this.props.player.toJS()
    if (this.isMove) {
      this.setState({
        width:
          (player.lyric.currentTime / player.playInfo.timeLength) * 100 + '%'
      })
    }
    return true
  }
  public componentDidMount() {
    const player = this.props.player.toJS()
    this.setState({
      width: (player.lyric.currentTime / player.playInfo.timeLength) * 100 + '%'
    })
    setTimeout(() => {
      this._initScroll()
      this._initHeightList()
      this._scrollTo(player.lyric.curNum)
    }, 20)
  }
  playPause = () => {
    if (this.props.player.toJS().playInfo) {
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
    playPause: () => dispatch(actions.playPause()),
    playSong: (payload: any) => actions.getPlaySongData(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(SongInfo)

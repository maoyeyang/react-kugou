import * as React from 'react'
import { connect } from 'react-redux'
import GoBack from 'components/goBack/GoBack'
import styles from './rankInfo.module.styl'
import { API_getRankInfo } from 'api'
import { getYearMonthDay } from 'common/js/time'
import SongList from 'components/songList/SongList'

interface RankProps {
  play: boolean
  match: any
}
interface RankState {
  data: any
}
class Rank extends React.PureComponent<RankProps, RankState> {
  public render() {
    if (!this.state) return null
    const info = this.state.data.info
    const songs = this.state.data.songs
    console.log(this.state.data)
    return (
      <div
        className={styles.rankInfo + ' ' + (this.props.play ? styles.play : '')}
      >
        <GoBack text={info.rankname || '暂无数据'} />
        <div className={styles.top}>
          <img
            src={info.imgurl.replace('{size}', 400)}
            className={styles.img}
          />
          <div className={styles.time}>
            <span className={styles.timeText}>
              {`上次更新时间 : ${getYearMonthDay(songs.timestamp)}`}
            </span>
          </div>
        </div>
        <SongList styleType={2} data={songs.list} />
      </div>
    )
  }
  public async componentDidMount() {
    const data = await API_getRankInfo(this.props.match.params.rankid)
    this.setState({
      data: data.data
    })
  }
}
const mapState = (state: any) => {
  return {
    play: JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}'
  }
}

export default connect(
  mapState,
  null
)(Rank)

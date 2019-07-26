import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import GoBack from 'components/goBack/GoBack'
import * as actions from 'store/actions'
import { getYearMonthDay } from 'common/js/time'
import SongList from 'components/songList/SongList'
import Scroll from 'common/components/scroll/Scroll'
import styles from './rankInfo.module.styl'

interface RankInfoProps {
  play: boolean
  match: any
  getRankInfo: Function
  data: any
}

class RankInfo extends React.PureComponent<RankInfoProps, {}> {
  public render() {
    const data = this.props.data.toJS()
    if (JSON.stringify(data) === '{}') return null
    return (
      <div
        className={styles.rankInfo + ' ' + (this.props.play ? styles.play : '')}
      >
        <GoBack styleType={false} text={data.info.rankname || '暂无数据'} />
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>
            <div className={styles.top}>
              <img
                src={data.info.imgurl.replace('{size}', 400)}
                className={styles.img}
              />
              <div className={styles.time}>
                <span className={styles.timeText}>
                  {`上次更新时间 : ${getYearMonthDay(data.songs.timestamp)}`}
                </span>
              </div>
            </div>
            <SongList styleType={2} data={data.songs.list} />
          </div>
        </Scroll>
      </div>
    )
  }
  public async componentDidMount() {
    if (JSON.stringify(this.props.data.toJS()) === '{}') {
      this.props.getRankInfo(this.props.match.params.rankid)
      return
    }
    if (
      parseInt(this.props.match.params.rankid) !==
      this.props.data.toJS().info.rankid
    ) {
      this.props.getRankInfo(this.props.match.params.rankid)
    }
  }
}
const mapState = (state: any) => {
  return {
    play:
      JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}',
    data: state.getIn(['global', 'rankInfo'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    getRankInfo: (payload: any) => actions.getRankInfo(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(RankInfo)

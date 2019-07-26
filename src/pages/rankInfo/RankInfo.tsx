import * as React from 'react'
import { connect } from 'react-redux'
import GoBack from 'components/goBack/GoBack'
import styles from './rankInfo.module.styl'
import { API_getRankInfo } from 'api'

type RankProps = {
  play: boolean
  match: any
}

class Rank extends React.PureComponent<RankProps, {}> {
  public render() {
    console.log(this.props)
    return (
      <div
        className={styles.rankInfo + ' ' + (this.props.play ? styles.play : '')}
      >
        <GoBack text={'' || '暂无播放歌曲'} />
        <div>aaa</div>
      </div>
    )
  }
  public async componentDidMount() {
    const data = await API_getRankInfo(this.props.match.params.rankid)
    console.log(data)
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

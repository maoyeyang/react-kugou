import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Scroll from 'common/components/scroll/Scroll'
import RankList from 'components/rankList/RankList'
import * as actions from 'store/actions'
import styles from './rank.module.styl'

interface RankProps {
  rank: any
  play: boolean
  getRankData: Function
}

class Rank extends React.PureComponent<RankProps, {}> {
  public render() {
    return (
      <div
        className={styles.rankList + ' ' + (this.props.play ? styles.play : '')}
      >
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>
            <RankList />
          </div>
        </Scroll>
      </div>
    )
  }
  public componentDidMount() {
    this.props.getRankData(this.props.rank)
  }
}
const mapState = (state: any) => {
  return {
    rank: state.getIn(['rank']),
    play: JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}'
  }
}

const mapDispatch = (dispatch: Dispatch) => ({
  getRankData(rank: Object) {
    actions.getRankData(rank)(dispatch)
  }
})

export default connect(
  mapState,
  mapDispatch
)(Rank)

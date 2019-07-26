import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Scroll from 'common/components/scroll/Scroll'
import PListList from 'components/pListList/PListList'
import * as actions from 'store/actions'
import styles from './pList.module.styl'

interface PListProps {
  pList: any
  play: boolean
  getPListData: Function
}

class PList extends React.PureComponent<PListProps, {}> {
  public render() {
    return (
      <div
        className={styles.pList + ' ' + (this.props.play ? styles.play : '')}
      >
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>
            <PListList />
          </div>
        </Scroll>
      </div>
    )
  }
  public componentDidMount() {
    this.props.getPListData(this.props.pList)
  }
}
const mapState = (state: any) => {
  return {
    pList: state.getIn(['pList']),
    play: JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}'
  }
}

const mapDispatch = (dispatch: Dispatch) => ({
  getPListData(pList: Object) {
    actions.getPListData(pList)(dispatch)
  }
})

export default connect(
  mapState,
  mapDispatch
)(PList)

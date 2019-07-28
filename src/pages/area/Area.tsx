import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import GoBack from 'components/goBack/GoBack'
import * as actions from 'store/actions'
import Scroll from 'common/components/scroll/Scroll'
import styles from './area.module.styl'

interface AreaProps {
  play: boolean
  match: any
  getAreaData: Function
  data: any
}

class Area extends React.PureComponent<AreaProps, {}> {
  public render() {
    const data = this.props.data.toJS()
    console.log(data)
    return (
      <div className={styles.area + ' ' + (this.props.play ? styles.play : '')}>
        <GoBack text={data.classname || '暂无数据'} styleType={true} />
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>{''}</div>
        </Scroll>
      </div>
    )
  }
  public async componentDidMount() {
    if (JSON.stringify(this.props.data.toJS()) === '{}') {
      this.props.getAreaData(this.props.match.params.areaid)
      return
    }
    if (
      parseInt(this.props.match.params.areaid) !==
      this.props.data.toJS().info.area_id
    ) {
      this.props.getAreaData(this.props.match.params.areaid)
    }
  }
}
const mapState = (state: any) => {
  return {
    play:
      JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}',
    data: state.getIn(['area'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    getAreaData: (payload: any) => actions.getAreaData(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(Area)

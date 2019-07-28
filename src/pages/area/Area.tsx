import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import GoBack from 'components/goBack/GoBack'
import * as actions from 'store/actions'
import Scroll from 'common/components/scroll/Scroll'
import styles from './area.module.styl'
import StyleComponents from 'components/styleComponents/StyleComponent'

interface AreaProps {
  play: boolean
  match: any
  getAreaData: Function
  data: any
}

class Area extends React.PureComponent<AreaProps, {}> {
  public render() {
    const data = this.props.data.toJS()
    return (
      <div className={styles.area + ' ' + (this.props.play ? styles.play : '')}>
        <GoBack text={data.info.name || '暂无数据'} styleType={true} />
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>
            {!!data.module.length &&
              data.module.map((itme: any) => (
                <StyleComponents data={itme} key={itme.module_id} />
              ))}
          </div>
        </Scroll>
      </div>
    )
  }
  public componentWillUpdate(nextProps: AreaProps) {
    if (this.props.match.params.areaid !== nextProps.match.params.areaid) {
      this.props.getAreaData(nextProps.match.params.areaid)
    }
  }
  public async componentDidMount() {
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

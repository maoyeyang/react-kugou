import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import GoBack from 'components/goBack/GoBack'
import * as actions from 'store/actions'
import SongList from 'components/songList/SongList'
import Scroll from 'common/components/scroll/Scroll'
import styles from './pListInfo.module.styl'

interface PListInfoProps {
  play: boolean
  match: any
  getPListInfo: Function
  data: any
}
interface PListInfoState {
  button: boolean
}

class PListInfo extends React.PureComponent<PListInfoProps, PListInfoState> {
  constructor(props: PListInfoProps) {
    super(props)
    this.state = {
      button: false
    }
  }
  public render() {
    const data = this.props.data.toJS()
    if (JSON.stringify(data.info) === '{}' || !data.info) return null
    return (
      <div
        className={styles.rankInfo + ' ' + (this.props.play ? styles.play : '')}
      >
        <GoBack styleType={false} text={data.info.specialname || '暂无数据'} />
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>
            <div className={styles.top}>
              <img
                src={data.info.imgurl.replace('{size}', 400)}
                className={styles.img}
              />
              <div
                className={
                  styles.box + ' ' + (this.state.button ? styles.true : '')
                }
                onClick={() => {
                  this.setState({
                    button: !this.state.button
                  })
                }}
              >
                <p className={styles.text}>{data.info.intro}</p>
                <i
                  className={
                    styles.icon + ' ' + (this.state.button ? styles.true : '')
                  }
                />
              </div>
            </div>
            <SongList styleType={1} data={data.list} />
          </div>
        </Scroll>
      </div>
    )
  }
  public async componentDidMount() {
    if (
      JSON.stringify(this.props.data.toJS()) === '{}' ||
      this.props.data.toJS().info === null
    ) {
      this.props.getPListInfo(this.props.match.params.specialid)
      return
    }
    if (
      this.props.data.toJS().info &&
      parseInt(this.props.match.params.specialid) !==
        this.props.data.toJS().info.specialid
    ) {
      this.props.getPListInfo(this.props.match.params.specialid)
    }
  }
}
const mapState = (state: any) => {
  return {
    play:
      JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}',
    data: state.getIn(['global', 'pListInfo'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    getPListInfo: (payload: any) => actions.getPListInfo(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(PListInfo)

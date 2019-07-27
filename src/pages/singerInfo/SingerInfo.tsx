import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import GoBack from 'components/goBack/GoBack'
import * as actions from 'store/actions'
import SongList from 'components/songList/SongList'
import Scroll from 'common/components/scroll/Scroll'
import styles from './singerInfo.module.styl'

interface SingerInfoProps {
  play: boolean
  match: any
  getSingerInfoData: Function
  data: any
}
interface SingerInfoState {
  button: boolean
}

class SingerInfo extends React.PureComponent<SingerInfoProps, SingerInfoState> {
  constructor(props: SingerInfoProps) {
    super(props)
    this.state = {
      button: false
    }
  }
  public render() {
    const data = this.props.data.toJS()
    if (JSON.stringify(data.info) === '{}') return null
    return (
      <div
        className={
          styles.singerInfo + ' ' + (this.props.play ? styles.play : '')
        }
      >
        <GoBack styleType={false} text={data.info.singername || '暂无数据'} />
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
    if (JSON.stringify(this.props.data.toJS()) === '{}') {
      this.props.getSingerInfoData(this.props.match.params.singerid)
      return
    }
    if (
      parseInt(this.props.match.params.singerid) !==
      this.props.data.toJS().info.singerid
    ) {
      this.props.getSingerInfoData(this.props.match.params.singerid)
    }
  }
}
const mapState = (state: any) => {
  return {
    play:
      JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}',
    data: state.getIn(['singer', 'singerInfo'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    getSingerInfoData: (payload: any) =>
      actions.getSingerInfoData(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(SingerInfo)

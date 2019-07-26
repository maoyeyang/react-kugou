import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import GoBack from 'components/goBack/GoBack'
import * as actions from 'store/actions'
import Scroll from 'common/components/scroll/Scroll'
import styles from './singerList.module.styl'

interface SingerListProps {
  play: boolean
  match: any
  getSingerListData: Function
  data: any
}

class SingerList extends React.PureComponent<SingerListProps, {}> {
  public render() {
    const data = this.props.data.toJS()
    return (
      <div
        className={
          styles.singerList + ' ' + (this.props.play ? styles.play : '')
        }
      >
        <GoBack text={data.classname || '暂无数据'} styleType={true} />
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>
            {!!data.list.length &&
              data.list.map((item: any) => (
                <Link
                  to={`/singer/info/${item.singerid}`}
                  key={item.singerid}
                  className={styles.item}
                >
                  <img
                    src={item.imgurl.replace('{size}', 400)}
                    className={styles.img}
                  />
                  <div className={styles.name}>{item.singername}</div>
                </Link>
              ))}
          </div>
        </Scroll>
      </div>
    )
  }
  public async componentDidMount() {
    if (JSON.stringify(this.props.data.toJS()) === '{}') {
      this.props.getSingerListData(this.props.match.params.classid)
      return
    }
    if (
      parseInt(this.props.match.params.classid) !==
      this.props.data.toJS().classid
    ) {
      this.props.getSingerListData(this.props.match.params.classid)
    }
  }
}
const mapState = (state: any) => {
  return {
    play:
      JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}',
    data: state.getIn(['singer', 'singerList'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    getSingerListData: (payload: any) =>
      actions.getSingerListData(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(SingerList)

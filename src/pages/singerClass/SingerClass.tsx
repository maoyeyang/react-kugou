import * as React from 'react'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Scroll from 'common/components/scroll/Scroll'
import * as actions from 'store/actions'
import styles from './singerClass.module.styl'

interface RankProps {
  singerClass: any
  play: boolean
  getSingerClassData: Function
}

class Rank extends React.PureComponent<RankProps, {}> {
  public render() {
    const singerClass = this.props.singerClass.toJS()
    let singerArr: any = []
    let index = -1
    let numPrev = -1
    singerClass.forEach((item: any) => {
      let num = Math.ceil(item.classid / 3)
      console.log(item, num)
      if (num !== numPrev) {
        index++
        singerArr[index] = new Array(item)
      } else {
        singerArr[index].push(item)
      }
      numPrev = num
    })
    return (
      <div
        className={
          styles.singerClass + ' ' + (this.props.play ? styles.play : '')
        }
      >
        <Scroll scrollStyle={styles.scrollStyle}>
          <div className={styles.div}>
            {!!singerArr.length &&
              singerArr.map((arr: any, index: number) => (
                <div key={index} className={styles.ul}>
                  {arr.length &&
                    arr.map((item: any) => (
                      <Link
                        to={`/singer/list/${item.classid}`}
                        key={item.classid}
                        className={styles.li}
                      >
                        <div className={styles.classname}>{item.classname}</div>
                        <i className={styles.icon} />
                      </Link>
                    ))}
                </div>
              ))}
          </div>
        </Scroll>
      </div>
    )
  }
  public componentDidMount() {
    this.props.getSingerClassData(this.props.singerClass)
  }
}
const mapState = (state: any) => {
  return {
    singerClass: state.getIn(['singer', 'singerClass']),
    play: JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}'
  }
}

const mapDispatch = (dispatch: Dispatch) => ({
  getSingerClassData(singerClass: Object) {
    actions.getSingerClassData(singerClass)(dispatch)
  }
})

export default connect(
  mapState,
  mapDispatch
)(Rank)

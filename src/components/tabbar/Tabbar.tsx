import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from 'store/actions'
import styles from './tabbar.module.styl'

type TabbarModel = {
  tabbarItem: number
  changeTabbarItem: (tabbarItem: number) => void
}

class Tabbar extends React.PureComponent<TabbarModel> {
  public render() {
    const index = this.props.tabbarItem
    return (
      <div className={styles.tabbar}>
        <Link
          to="/home/newsong"
          className={styles.tabbarItem}
          onClick={() => {
            this.handleChangeRoute(0)
          }}
          replace={true}
        >
          新歌
        </Link>
        <Link
          to="/home/ranklist"
          className={styles.tabbarItem}
          onClick={() => {
            this.handleChangeRoute(1)
          }}
          replace={true}
        >
          排行
        </Link>
        <Link
          to="/home/plist"
          className={styles.tabbarItem}
          onClick={() => {
            this.handleChangeRoute(2)
          }}
          replace={true}
        >
          歌单
        </Link>
        <Link
          to="/home/singer"
          className={styles.tabbarItem}
          onClick={() => {
            this.handleChangeRoute(3)
          }}
          replace={true}
        >
          歌手
        </Link>
        <div className={styles.tabbarBottom + ' ' + styles[`bottom${index}`]} />
      </div>
    )
  }
  public handleChangeRoute(index: number) {
    this.props.changeTabbarItem(index)
  }
}

const mapState = (state: any) => ({
  tabbarItem: state.getIn(['global', 'tabbarItem'])
})
const mapDispath = (dispatch: Dispatch) => {
  return {
    changeTabbarItem: (payload: number) =>
      dispatch(actions.changeTabbarItem(payload))
  }
}

export default connect(
  mapState,
  mapDispath
)(Tabbar)

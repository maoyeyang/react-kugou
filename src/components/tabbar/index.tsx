import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { IStoreModel } from 'model'
import * as actions from 'store/actions'
import './index.styl'

type PathParamsType = {}
type TabbarModel = RouteComponentProps<PathParamsType> & {
  tabbarItem: number
  changeTabbarItem: (tabbarItem: number) => void
}

class Tabbar extends React.PureComponent<TabbarModel, {}> {
  public render() {
    const index = this.props.tabbarItem
    return (
      <div className="tabbar">
        <Link
          to="/home/newsong"
          className="tabbar-item"
          onClick={() => {
            this.handleChangeRoute(0)
          }}
          replace={true}
        >
          新歌
        </Link>
        <Link
          to="/home/rank"
          className="tabbar-item"
          onClick={() => {
            this.handleChangeRoute(1)
          }}
          replace={true}
        >
          排行
        </Link>
        <Link
          to="/home/plist"
          className="tabbar-item"
          onClick={() => {
            this.handleChangeRoute(2)
          }}
          replace={true}
        >
          歌单
        </Link>
        <Link
          to="/home/singer"
          className="tabbar-item"
          onClick={() => {
            this.handleChangeRoute(3)
          }}
          replace={true}
        >
          歌手
        </Link>
        <div className={`tabbar-bottom bottom-${index}`} />
      </div>
    )
  }
  public handleChangeRoute(index: number) {
    this.props.changeTabbarItem(index)
  }
}

const mapState = (state: IStoreModel) => ({
  tabbarItem: state.global.tabbarItem
})
const mapDispath = (dispatch: Dispatch) => {
  return {
    changeTabbarItem: (payload: number) =>
      dispatch(actions.changeTabbarItem(payload))
  }
}

export default withRouter(
  connect(
    mapState,
    mapDispath
  )(Tabbar)
)

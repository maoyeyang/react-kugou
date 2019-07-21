import * as React from 'react'
// import { Dispatch } from 'redux'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { ITabbarModel } from 'model'
// import * as actions from 'store/actions'
import './index.styl'

class NewSong extends React.PureComponent<ITabbarModel, {}> {
  public render() {
    return (
      <div className="new-song">
        <div className="swiper">aaa</div>
      </div>
    )
  }
}

// const mapState = (state: IStoreModel) => ({
//   tabbarItem: state.global.tabbarItem
// })
// const mapDispath = (dispatch: Dispatch) => {
//   return {
//     changeTabbarItem: (payload: number) =>
//       dispatch(actions.changeTabbarItem(payload))
//   }
// }

export default connect(
  null,
  null
)(NewSong)

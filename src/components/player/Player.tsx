import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { IStoreModel } from 'model'
import styles from './player.module.styl'

type PathParamsType = {}
type PlayerModel = RouteComponentProps<PathParamsType> & {
  [propName: string]: any
}

class Player extends React.PureComponent<PlayerModel> {
  public render() {
    console.log(this.props)
    return (
      <div className={styles.player}>
        <div className={styles.left}>
          <img
            src="http://singerimg.kugou.com/uploadpic/softhead/200/20190720/20190720220214641.jpg"
            className={styles.img}
          />
          <div className={styles.text}>
            <p className={styles.songName}>鸟语林【宸汐缘电视剧插曲】</p>
            <p className={styles.singer}>双笙</p>
          </div>
        </div>
        <div className={styles.right}>
          <i className={styles.icon + ' ' + styles.play} />
          <i className={styles.iconNext} />
          <i className={styles.iconDownLoad} />
        </div>
      </div>
    )
  }
}

const mapState = (state: IStoreModel) => ({
  ...state.global
})

export default connect(
  mapState,
  null
)(withRouter(Player))

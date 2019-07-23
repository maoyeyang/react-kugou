import * as React from 'react'
import { connect } from 'react-redux'
import styles from './player.module.styl'
import BaseComponents from 'common/components/baseComponents/BaseComponents'

type PlayerModel = {
  playerList: []
  isPlay: boolean
  playInfo: object
}

class Player extends BaseComponents {
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

const mapState = (state: any) => ({
  player: state.getIn(['global', 'player'])
})

export default connect(
  mapState,
  null
)(Player)

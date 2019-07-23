import * as React from 'react'
import { connect } from 'react-redux'
import styles from './songInfo.module.styl'
import GoBack from 'components/goBack/GoBack'

type songInfoModel = {
  player: any
}

class SongInfo extends React.PureComponent<songInfoModel, {}> {
  public render() {
    const player = this.props.player.toJS()
    console.log(player)
    let style
    if (player.playInfo.imgUrl) {
      style = {
        backgroundImage: `url(${player.playInfo.imgUrl &&
          player.playInfo.imgUrl.replace('{size}', 200)})`
      }
    }
    return (
      <div className={styles.songInfo}>
        <div className={styles.filter} style={style} />
        <GoBack text={player.playInfo.songName} />
        <div className={styles.content}>111</div>
      </div>
    )
  }
}
const mapState = (state: any) => {
  return {
    player: state.getIn(['global', 'player'])
  }
}

export default connect(
  mapState,
  null
)(SongInfo)

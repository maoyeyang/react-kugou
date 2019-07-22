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
    return <div className={styles.player}>111</div>
  }
}

const mapState = (state: IStoreModel) => ({
  ...state.global
})

export default connect(
  mapState,
  null
)(withRouter(Player))

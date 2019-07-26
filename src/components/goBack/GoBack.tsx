import * as React from 'react'
import styles from './goBack.module.styl'
import { withRouter, RouteComponentProps } from 'react-router-dom'

type GoBackModel = RouteComponentProps & { text: string; styleType: boolean }

const GoBack: React.StatelessComponent<GoBackModel> = props => {
  return (
    <div className={styles.header + ' ' + (props.styleType ? styles.true : '')}>
      <div
        className={styles.left}
        onClick={() => {
          props.history.go(-1)
        }}
      >
        <i
          className={
            styles.iconGoBack + ' ' + (props.styleType ? styles.true : '')
          }
        />
      </div>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default withRouter(GoBack)

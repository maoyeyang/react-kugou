import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './rankList.module.styl'

type RankListProps = {
  rankList: any
}

class RankList extends React.PureComponent<RankListProps> {
  public render() {
    let rankList: any = []
    if (this.props.rankList) {
      rankList = this.props.rankList
    }
    return (
      <div className={styles.list}>
        {!!rankList.length &&
          rankList.map((item: any) => (
            <Link
              to={`/rank/info/${item.rankid}`}
              key={item.rankid}
              className={styles.listItem}
            >
              <img
                src={item.imgurl.replace('{size}', 400)}
                className={styles.img}
              />
              <div className={styles.text}>{item.rankname}</div>
              <i className={styles.icon} />
            </Link>
          ))}
      </div>
    )
  }
}

const mapState = (state: any) => ({
  rankList: state.getIn(['rank']) && state.getIn(['rank']).toJS()
})

export default connect(
  mapState,
  null
)(RankList)

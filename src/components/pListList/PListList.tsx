import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './pListList.module.styl'

interface PListListProps {
  pListData: any
}

class PListList extends React.PureComponent<PListListProps> {
  public render() {
    let pListData: any = []
    if (this.props.pListData) {
      pListData = this.props.pListData
    }
    return (
      <div className={styles.list}>
        {!!pListData.length &&
          pListData.map((item: any) => (
            <Link
              to={`/plist/info/${item.specialid}`}
              key={item.specialid}
              className={styles.listItem}
            >
              <img
                src={item.imgurl.replace('{size}', 400)}
                className={styles.img}
              />
              <div className={styles.text}>
                <div className={styles.name}>{item.specialname}</div>
                <div className={styles.count}>
                  <i className={styles.iconMusic} />
                  {item.playcount}
                </div>
              </div>
              <i className={styles.icon} />
            </Link>
          ))}
      </div>
    )
  }
}

const mapState = (state: any) => ({
  pListData: state.getIn(['pList']) && state.getIn(['pList']).toJS()
})

export default connect(
  mapState,
  null
)(PListList)

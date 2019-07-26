import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import styles from './songList.module.styl'

interface SongListProps {
  data: any
  playSong: Function
  styleType: number
}

class SongList extends React.PureComponent<SongListProps> {
  public render() {
    const songList = this.props.data || []
    return (
      <div className={styles.list}>
        {!!songList.length &&
          songList.map((item: any, index: number) => (
            <div
              key={item.hash}
              className={styles.listItem}
              onClick={() => {
                this.props.playSong({
                  hash: item.hash,
                  type: 'play',
                  data: songList
                })
              }}
            >
              {this.props.styleType === 2 && (
                <div className={styles.rank}>
                  <span className={styles.number}>{index + 1}</span>
                </div>
              )}
              <div className={styles.itemName}>{item.filename}</div>
              <div
                className={styles.downLoad}
                onClick={e => {
                  console.log('下载')
                  e.stopPropagation()
                }}
              >
                <i className={styles.iconDownLoad} />
              </div>
            </div>
          ))}
      </div>
    )
  }
}

const mapDispath = (dispatch: Dispatch) => {
  return {
    playSong: (payload: any) => actions.getPlaySongData(payload)(dispatch)
  }
}

export default connect(
  null,
  mapDispath
)(SongList)

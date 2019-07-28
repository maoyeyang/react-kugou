import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import styles from './songList.module.styl'
import Toast from 'components/toast'

interface SongListProps {
  data: any
  playSong: Function
  styleType: number
}

class SongList extends React.PureComponent<SongListProps> {
  public render() {
    const songList = this.props.data || []
    const styleType = this.props.styleType
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
              {styleType === 2 && (
                <div className={styles.rank}>
                  <span
                    className={
                      styles.number +
                      ' ' +
                      (index === 0
                        ? styles.red
                        : index === 1
                        ? styles.orange
                        : index === 2
                        ? styles.yellow
                        : '')
                    }
                  >
                    {index + 1}
                  </span>
                </div>
              )}
              <div className={styles.itemName}>{item.filename}</div>
              <div
                className={styles.downLoad}
                onClick={e => {
                  Toast.info('下载请使用酷狗客户端', 2000, () => {})
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

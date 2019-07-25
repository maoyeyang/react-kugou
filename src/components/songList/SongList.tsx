import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'store/actions'
import styles from './songList.module.styl'

type SongListModel = {
  [propName: string]: any
}

class SongList extends React.PureComponent<SongListModel> {
  public render() {
    const data = this.props.data || []
    return (
      <div className={styles.list}>
        {!!data.length &&
          data.map((item: any) => (
            <div
              key={item.hash}
              className={styles.listItem}
              onClick={() => {
                this.props.playSong({ hash: item.hash, type: 'play', data })
              }}
            >
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

const mapState = (state: any) => ({
  data:
    state.getIn(['newSong', 'data']) && state.getIn(['newSong', 'data']).toJS()
})
const mapDispath = (dispatch: Dispatch) => {
  return {
    playSong: (payload: any) => actions.getPlaySongData(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(SongList)

import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import * as constants from 'constants/index'
import immutable from 'immutable'
import axios from 'axios'
import * as Lyric from 'common/js/lyric'

export const changeTabbarItem = createAction<{ tabbarItem: number }, number>(
  constants.GLOBAL_CHANGE_TABBAR_ITEM,
  (tabbarItem: number) => ({
    tabbarItem
  })
)

export const playSong = createAction<any, any>(
  constants.GLOBAL_PLAY_SONG,
  data => data
)
export const changeLyric = createAction<any, any>(
  constants.GLOBAL_CHANGE_LYRIC,
  data => data
)
export const playPause = createAction<any, any>(
  constants.GLOBAL_PLAY_PAUSE,
  (lyric: any) => lyric
)

export const getPlaySongData = (playSongData: any) => {
  return async (dispatch: Dispatch) => {
    let songInfoUrl = `/api/api/v1/song/get_song_info?cmd=playInfo&hash=${
      playSongData.item.hash
    }`
    let data1 = await axios.get(songInfoUrl)
    let songLyricUrl = `/api/app/i/krc.php?cmd=100&hash=${
      playSongData.item.hash
    }&timelength=${data1.data.timeLength * 100}`
    let data2 = await axios.get(songLyricUrl)
    const lyric = Lyric.initLyric(data2.data)
    lyric.startStamp = +new Date()
    dispatch(
      playSong(
        immutable.fromJS({
          playInfo: data1.data,
          playerList: playSongData.data,
          lyric
        })
      )
    )
    return
  }
}

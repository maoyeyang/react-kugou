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
export const playPause = createAction<any, any>(
  constants.GLOBAL_PLAY_PAUSE,
  (lyric: any) => lyric
)
export const changeCurNum = createAction(
  constants.GLOBAL_CHANGE_CURNUM,
  () => {}
)
export const playByIndex = createAction<any, any>(
  constants.GLOBAL_PLAY_BY_INDEX,
  (index: number) => ({
    index
  })
)

export const getPlaySongData = (playSongData: any) => {
  return async (dispatch: Dispatch) => {
    let data: any
    if (playSongData.type === 'play') {
      data = await getSongDataAndLyric(playSongData.hash)
    } else {
      let index = playSongData.data.findIndex(
        (item: any) => item.hash === playSongData.hash
      )
      if (playSongData.type === 'next') {
        index === playSongData.data.length - 1 ? (index = 0) : index++
        data = await getSongDataAndLyric(playSongData.data[index].hash)
      }
      if (playSongData.type === 'prev') {
        index === 0 ? (index = playSongData.data.length - 1) : index--
        data = await getSongDataAndLyric(playSongData.data[index].hash)
      }
    }

    dispatch(
      playSong(
        immutable.fromJS({
          playInfo: data.playInfo,
          playerList: playSongData.data,
          lyric: data.lyric
        })
      )
    )
  }
}

const getSongDataAndLyric = async (hash: string) => {
  let playInfo = await axios.get('/api/api/v1/song/get_song_info', {
    params: {
      cmd: 'playInfo',
      hash
    }
  })
  let lyricString = await axios.get('/api/app/i/krc.php', {
    params: {
      timelength: playInfo.data.timeLength * 100,
      hash,
      cmd: 100
    }
  })
  const lyric = Lyric.initLyric(lyricString.data)
  lyric.startStamp = +new Date()
  return {
    playInfo: playInfo.data,
    lyric
  }
}

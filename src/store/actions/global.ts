import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import * as constants from 'constants/index'
import immutable from 'immutable'
import * as Lyric from 'common/js/lyric'
import {
  API_getSongInfo,
  API_getSongLyric,
  API_getRankInfo,
  API_getPListInfo
} from 'api'

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
export const playPause = createAction(constants.GLOBAL_PLAY_PAUSE, () => {})

export const setCurrentTime = createAction<any, any>(
  constants.GLOBAL_SET_CURRENTTIME,
  (setData: { currentTime: number; curNum: number }) => setData
)
export const playByIndex = createAction<any, any>(
  constants.GLOBAL_PLAY_BY_INDEX,
  (index: number) => ({
    index
  })
)

export const changeRankInfo = createAction<any, any>(
  constants.GLOBAL_CHANGE_RANKINFO_DATA,
  (data: any) => {
    return data
  }
)

export const changePListInfo = createAction<any, any>(
  constants.GLOBAL_CHANGE_PLISTINFO_DATA,
  (data: any) => {
    return data
  }
)

export const getPListInfo = (specialid: number) => {
  return async (dispatch: Dispatch) => {
    const res = await API_getPListInfo(specialid)
    dispatch(changePListInfo(res.data))
    return
  }
}

export const getRankInfo = (rankid: number) => {
  return async (dispatch: Dispatch) => {
    const res = await API_getRankInfo(rankid)
    dispatch(changeRankInfo(res.data))
    return
  }
}

export const getPlaySongData = (playSongData: any) => {
  return async (dispatch: Dispatch) => {
    let data: any
    if (playSongData.type === 'play') {
      data = await getSongDataAndLyric(playSongData.hash)
    } else {
      let index = playSongData.data.findIndex(
        (item: any) =>
          item.hash.toUpperCase() === playSongData.hash.toUpperCase()
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
  let playInfo = await API_getSongInfo(hash)
  let lyricString = await API_getSongLyric(hash, playInfo.data.timeLength)
  const lyric = Lyric.initLyric(lyricString.data)
  return {
    playInfo: playInfo.data,
    lyric
  }
}

import axios from './server'
import * as URL from './constants'

/*
 * 获取排行版分类歌曲列表
 */
export const API_getNewSongData = () => {
  return axios.get(URL.GET_NEWSONG_DATA_URL, {
    params: {
      json: true
    }
  })
}
/*
 * 获取排行版分类歌曲列表
 * params :rankid number
 */
export const API_getRankInfo = (rankid: number) => {
  return axios.get(URL.GET_RANK_INFO_URL, {
    params: {
      rankid: rankid,
      json: true
    }
  })
}
/*
 * 获取歌曲信息
 * params :hash string
 */
export const API_getSongInfo = (hash: string) => {
  return axios.get(URL.GET_SONG_INFO_URL, {
    params: {
      cmd: 'playInfo',
      hash
    }
  })
}
/*
 * 获取歌词信息
 * params :hash string
 * params :timeLength number
 */
export const API_getSongLyric = (hash: string, timeLength: number) => {
  return axios.get(URL.GET_SONG_LYRIC_URL, {
    params: {
      timelength: timeLength * 100,
      cmd: 100,
      hash
    }
  })
}
/*
 * 获取音乐排行榜
 */
export const API_getRankList = () => {
  return axios.get(URL.GET_RANK_LIST_URL, {
    params: {
      json: true
    }
  })
}
/*
 * 获取音乐歌单
 */
export const API_getPList = () => {
  return axios.get(URL.GET_PLIST_URL, {
    params: {
      json: true
    }
  })
}

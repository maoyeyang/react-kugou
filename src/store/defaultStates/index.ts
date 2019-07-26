import { IGlobalModel, INewSongModel } from 'model'
import immutable from 'immutable'
import * as Lyric from 'common/js/lyric'

export const defaultGlobalState: IGlobalModel = immutable.fromJS({
  tabbarItem: 0,
  player: {
    playerList: [],
    playInfo: {},
    lyric: Lyric.initLyric('')
  }
})
export const defaultNewSongState: INewSongModel = immutable.fromJS({})

export const defaultRankState: INewSongModel = immutable.fromJS({})

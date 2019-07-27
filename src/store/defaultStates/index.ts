import * as Model from 'model'
import immutable from 'immutable'
import * as Lyric from 'common/js/lyric'

export const defaultGlobalState: Model.IGlobalModel = immutable.fromJS({
  tabbarItem: 0,
  player: {
    playerList: [],
    playInfo: {},
    lyric: Lyric.initLyric('')
  },
  rankInfo: {},
  pListInfo: {}
})
export const defaultNewSongState: Model.INewSongModel = immutable.fromJS({})

export const defaultRankState: Model.IRankModel = immutable.fromJS([])

export const defaultPListState: Model.IPListModel = immutable.fromJS([])

export const defaultSingerState: Model.ISingerModel = immutable.fromJS({
  singerClass: [],
  singerList: {
    classid: 0,
    classname: '',
    list: []
  },
  singerInfo: {
    info: {},
    list: []
  }
})

export const defaultSearchState: Model.ISearchModel = immutable.fromJS({
  hot: []
})

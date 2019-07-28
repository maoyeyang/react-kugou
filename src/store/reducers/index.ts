import { combineReducers } from 'redux-immutable'
import globalReducer from './global'
import newSongReducer from './newSong'
import rankReducer from './rank'
import pListReducer from './pList'
import singerReducer from './singer'
import searchReducer from './search'
import areaReducer from './area'

const reducer = combineReducers({
  global: globalReducer as any,
  newSong: newSongReducer as any,
  rank: rankReducer as any,
  pList: pListReducer as any,
  singer: singerReducer as any,
  search: searchReducer as any,
  area: areaReducer as any
})

export default reducer

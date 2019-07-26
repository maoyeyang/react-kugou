import { combineReducers } from 'redux-immutable'
import globalReducer from './global'
import newSongReducer from './newSong'
import rankReducer from './rank'
import pListReducer from './pList'
import singerReducer from './singer'

const reducer = combineReducers({
  global: globalReducer as any,
  newSong: newSongReducer as any,
  rank: rankReducer as any,
  pList: pListReducer as any,
  singer: singerReducer as any
})

export default reducer

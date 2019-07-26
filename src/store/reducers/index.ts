import { combineReducers } from 'redux-immutable'
import globalReducer from './global'
import newSongReducer from './newSong'
import rankReducer from './rank'

const reducer = combineReducers({
  global: globalReducer as any,
  newSong: newSongReducer as any,
  rank: rankReducer as any
})

export default reducer

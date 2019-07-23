import { combineReducers } from 'redux-immutable'
import globalReducer from './global'
import newSongReducer from './newSong'

const reducer = combineReducers({
  global: globalReducer as any,
  newSong: newSongReducer as any
})

export default reducer

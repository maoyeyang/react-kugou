import { combineReducers } from 'redux'
import globalReducer from './global'
import newSongReducer from './newSong'
import playerReducer from './player'

const reducer = combineReducers({
  global: globalReducer as any,
  newSong: newSongReducer as any,
  player: playerReducer as any
})

export default reducer

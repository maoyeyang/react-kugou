import { combineReducers } from 'redux'
import { globalReducer } from './global'

const reducer = combineReducers({
  global: globalReducer as any
})

export default reducer

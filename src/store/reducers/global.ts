import { handleActions } from 'redux-actions'
import * as constants from 'constants/index'
import { IGlobalModel } from 'model'
import { defaultGlobalState } from '../defaultStates'

const globalReducer = handleActions<IGlobalModel>(
  {
    [constants.GLOBAL_CHANGE_TABBAR_ITEM]: (state: any, action: any) => {
      return state.set('tabbarItem', action.payload.tabbarItem)
    },
    [constants.GLOBAL_PLAY_SONG]: (state: any, action: any) => {
      return state.set('player', action.payload)
    },
    [constants.GLOBAL_PLAY_PAUSE]: (state: any, action: any) => {
      return state.setIn(
        ['player', 'lyric', 'state'],
        !state.getIn(['player', 'lyric', 'state'])
      )
    },
    [constants.GLOBAL_SET_CURRENTTIME]: (state: any, action: any) => {
      return state
        .setIn(['player', 'lyric', 'currentTime'], action.payload.currentTime)
        .setIn(['player', 'lyric', 'curNum'], action.payload.curNum)
    },
    [constants.GLOBAL_PLAY_BY_INDEX]: (state: any, action: any) => {
      return state.setIn(['player', 'playInfo'])
    }
  },
  defaultGlobalState
)
export default globalReducer

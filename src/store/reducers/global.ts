import { handleActions } from 'redux-actions'
import * as constants from 'constants/index'
import { IGlobalModel } from 'model'
import { defaultGlobalState } from '../defaultStates'
import * as Lyric from 'common/js/lyric'

const globalReducer = handleActions<IGlobalModel>(
  {
    [constants.GLOBAL_CHANGE_TABBAR_ITEM]: (state: any, action: any) => {
      return state.set('tabbarItem', action.payload.tabbarItem)
    },
    [constants.GLOBAL_PLAY_SONG]: (state: any, action: any) => {
      return state.set('player', action.payload)
    },
    [constants.GLOBAL_PLAY_PAUSE]: (state: any, action: any) => {
      return playPause(state, action)
    },
    [constants.GLOBAL_CHANGE_CURNUM]: (state: any, action: any) => {
      return state.setIn(
        ['player', 'lyric', 'curNum'],
        Lyric.show(state.getIn(['player', 'lyric']).toJS())
      )
    },
    [constants.GLOBAL_PLAY_BY_INDEX]: (state: any, action: any) => {
      return state.setIn(['player', 'playInfo'])
    }
  },
  defaultGlobalState
)
export default globalReducer

function playPause(state: any, action: any) {
  if (!action.payload.state) {
    return state
      .setIn(
        ['player', 'lyric', 'state'],
        !state.getIn(['player', 'lyric', 'state'])
      )
      .setIn(
        ['player', 'lyric', 'startStamp'],
        Lyric.play(action.payload).startStamp
      )
  } else {
    return state
      .setIn(
        ['player', 'lyric', 'state'],
        !state.getIn(['player', 'lyric', 'state'])
      )
      .setIn(
        ['player', 'lyric', 'playTime'],
        Lyric.stop(action.payload).playTime
      )
  }
}

import { handleActions } from 'redux-actions'
import {
  SINGER_CHANGE_CLASS_DATA,
  SINGER_CHANGE_LIST_DATA,
  SINGER_CHANGE_INFO_DATA
} from 'constants/index'
import { ISingerModel } from 'model'
import { defaultSingerState } from '../defaultStates'
import immutable from 'immutable'

const SingerReducer = handleActions<ISingerModel>(
  {
    [SINGER_CHANGE_CLASS_DATA]: (state: any, action: any) => {
      return state.setIn(['singerClass'], immutable.fromJS(action.payload.list))
    },
    [SINGER_CHANGE_LIST_DATA]: (state: any, action: any) => {
      return state.setIn(
        ['singerList'],
        immutable.fromJS({
          classname: action.payload.classname,
          classid: action.payload.classid,
          list: action.payload.singers.list.info
        })
      )
    },
    [SINGER_CHANGE_INFO_DATA]: (state: any, action: any) => {
      return state.setIn(
        ['singerInfo'],
        immutable.fromJS({
          info: action.payload.info,
          list: action.payload.songs.list
        })
      )
    }
  },
  defaultSingerState
)

export default SingerReducer

import { handleActions } from 'redux-actions'
import {
  SINGER_CHANGE_CLASS_DATA,
  SINGER_CHANGE_LISR_DATA
} from 'constants/index'
import { ISingerModel } from 'model'
import { defaultSingerState } from '../defaultStates'
import immutable from 'immutable'

const SingerReducer = handleActions<ISingerModel>(
  {
    [SINGER_CHANGE_CLASS_DATA]: (state: any, action: any) => {
      return state.setIn(['singerClass'], immutable.fromJS(action.payload.list))
    },
    [SINGER_CHANGE_LISR_DATA]: (state: any, action: any) => {
      return state.setIn(
        ['singerList'],
        immutable.fromJS({
          classname: action.payload.classname,
          classid: action.payload.classid,
          list: action.payload.singers.list.info
        })
      )
    }
  },
  defaultSingerState
)

export default SingerReducer

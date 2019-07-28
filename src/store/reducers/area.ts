import { handleActions } from 'redux-actions'
import { AREA_CHANGE_DATA } from 'constants/index'
import { IAreaModel } from 'model'
import { defaultAreaState } from '../defaultStates'
import immutable from 'immutable'

const AreaReducer = handleActions<IAreaModel>(
  {
    [AREA_CHANGE_DATA]: (state: any, action: any) => {
      const data = {
        info: action.payload.area_info,
        module: action.payload.module_info
      }
      return immutable.fromJS(data)
    }
  },
  defaultAreaState
)

export default AreaReducer

import { handleActions } from 'redux-actions'
import { GLOBAL_CHANGE_TABBAR_ITEM } from 'constants/index'
import { IGlobalModel } from 'model'
import { defaultGlobalState } from '../defaultStates'

const globalReducer = handleActions<IGlobalModel>(
  {
    [GLOBAL_CHANGE_TABBAR_ITEM]: (state: any, action: any) => {
      return state.set('tabbarItem', action.payload.tabbarItem)
    }
  },
  defaultGlobalState
)
export default globalReducer

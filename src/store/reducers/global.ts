import { handleActions } from 'redux-actions'
import { GLOBAL_CHANGE_TABBAR_ITEM } from 'constants/global'
import { IGlobalModel } from 'model'
import { defaultGlobalState } from '../defaultStates'

export const globalReducer = handleActions<IGlobalModel>(
  {
    [GLOBAL_CHANGE_TABBAR_ITEM]: (state: any, action: any) => {
      return {
        ...state,
        tabbarItem: action.payload.tabbarItem
      }
    }
  },
  defaultGlobalState
)

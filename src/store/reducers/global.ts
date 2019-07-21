import { handleActions } from 'redux-actions'
import * as constants from '../../constants'
import { IGlobalModel } from '../../model'
import { defaultGlobalState } from '../defaultStates'

export const globalReducer = handleActions<IGlobalModel>(
  {
    [constants.GLOBAL_CHANGE_TABBAR_ITEM]: (state: any, action: any) => {
      return {
        ...state,
        tabbarItem: action.payload.tabbarItem
      }
    }
  },
  defaultGlobalState
)

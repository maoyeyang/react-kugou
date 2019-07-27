import { handleActions } from 'redux-actions'
import {
  SEARCH_CHANGE_HOT_DATA,
  SEARCH_CHANGE_RESULT_DATA
} from 'constants/index'
import { ISearchModel } from 'model'
import { defaultSearchState } from '../defaultStates'
import immutable from 'immutable'

const RankReducer = handleActions<ISearchModel>(
  {
    [SEARCH_CHANGE_HOT_DATA]: (state: any, action: any) => {
      return state.setIn(['hot'], immutable.fromJS(action.payload.data.info))
    },
    [SEARCH_CHANGE_RESULT_DATA]: (state: any, action: any) => {
      const data = {
        keyword: action.payload.keyword,
        total: action.payload.data.total,
        list: action.payload.data.info
      }
      return state.setIn(['result'], immutable.fromJS(data))
    }
  },
  defaultSearchState
)

export default RankReducer

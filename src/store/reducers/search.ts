import { handleActions } from 'redux-actions'
import { SEARCH_CHANGE_HOT_DATA } from 'constants/index'
import { ISearchModel } from 'model'
import { defaultSearchState } from '../defaultStates'
import immutable from 'immutable'

const RankReducer = handleActions<ISearchModel>(
  {
    [SEARCH_CHANGE_HOT_DATA]: (state: any, action: any) => {
      return state.setIn(['hot'], immutable.fromJS(action.payload.data.info))
    }
  },
  defaultSearchState
)

export default RankReducer

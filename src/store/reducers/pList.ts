import { handleActions } from 'redux-actions'
import { PLIST_CHANGE_DATA } from 'constants/index'
import { IPListModel } from 'model'
import { defaultPListState } from '../defaultStates'
import immutable from 'immutable'

const RankReducer = handleActions<IPListModel>(
  {
    [PLIST_CHANGE_DATA]: (state: any, action: any) => {
      return immutable.fromJS(action.payload)
    }
  },
  defaultPListState
)

export default RankReducer

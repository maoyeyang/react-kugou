import { handleActions } from 'redux-actions'
import { RANK_CHANGE_DATA } from 'constants/index'
import { IRankModel } from 'model'
import { defaultRankState } from '../defaultStates'
import immutable from 'immutable'

const RankReducer = handleActions<IRankModel>(
  {
    [RANK_CHANGE_DATA]: (state: any, action: any) => {
      return immutable.fromJS(action.payload)
    }
  },
  defaultRankState
)

export default RankReducer

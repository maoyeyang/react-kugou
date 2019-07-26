import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import { IRankModel } from 'model'
import { RANK_CHANGE_DATA } from 'constants/index'
import immutable from 'immutable'
import { API_getRankList } from 'api'

export const changeRankData = createAction<IRankModel, IRankModel>(
  RANK_CHANGE_DATA,
  (data: IRankModel) => {
    return data
  }
)

export const getRankData = (rank: Object) => {
  return async (dispatch: Dispatch) => {
    if (immutable.is(rank, immutable.fromJS({}))) {
      const res = await API_getRankList()
      dispatch(changeRankData(immutable.fromJS(res.data)))
      return
    }
  }
}

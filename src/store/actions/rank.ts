import { createAction } from 'redux-actions'
import axios from 'axios'
import { Dispatch } from 'redux'
import { IRankModel } from 'model'
import { RANK_CHANGE_DATA } from 'constants/index'
import immutable from 'immutable'

export const changeRankData = createAction<IRankModel, IRankModel>(
  RANK_CHANGE_DATA,
  (data: IRankModel) => {
    return data
  }
)

export const getRankData = (rank: Object) => {
  return (dispatch: Dispatch) => {
    if (immutable.is(rank, immutable.fromJS({}))) {
      axios.get('/api/rank/list&json=true').then(res => {
        dispatch(changeRankData(immutable.fromJS(res.data)))
      })
      return
    }
  }
}

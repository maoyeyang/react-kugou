import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import { IPListModel } from 'model'
import { PLIST_CHANGE_DATA } from 'constants/index'
import immutable from 'immutable'
import { API_getPList } from 'api'

export const changePListData = createAction<IPListModel, IPListModel>(
  PLIST_CHANGE_DATA,
  (data: IPListModel) => {
    return data
  }
)

export const getPListData = (pList: Object) => {
  return async (dispatch: Dispatch) => {
    if (immutable.is(pList, immutable.fromJS([]))) {
      const res = await API_getPList()
      dispatch(changePListData(res.data))
      return
    }
  }
}

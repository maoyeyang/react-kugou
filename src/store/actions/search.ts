import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import { ISearchModel } from 'model'
import {
  SEARCH_CHANGE_HOT_DATA,
  SEARCH_CHANGE_RESULT_DATA
} from 'constants/index'
import immutable from 'immutable'
import { API_getSearchHot, API_getSearchResult } from 'api'

export const changeHotData = createAction<ISearchModel, ISearchModel>(
  SEARCH_CHANGE_HOT_DATA,
  (data: ISearchModel) => {
    return data
  }
)
export const changeSearchResult = createAction<ISearchModel, ISearchModel>(
  SEARCH_CHANGE_RESULT_DATA,
  (data: ISearchModel) => {
    return data
  }
)

export const getSearchResult = (keyword: string | number) => {
  return async (dispatch: Dispatch) => {
    const res: any = await API_getSearchResult(keyword)
    res.data.keyword = keyword
    dispatch(changeSearchResult(res.data))
    return
  }
}
export const getHotData = (rank: Object) => {
  return async (dispatch: Dispatch) => {
    if (immutable.is(rank, immutable.fromJS([]))) {
      const res = await API_getSearchHot()
      dispatch(changeHotData(res.data))
      return
    }
  }
}

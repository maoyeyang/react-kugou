import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import { ISingerModel } from 'model'
import {
  SINGER_CHANGE_CLASS_DATA,
  SINGER_CHANGE_LISR_DATA
} from 'constants/index'
import immutable from 'immutable'
import { API_getSingerClass, API_getSingerList } from 'api'

export const changeSingerClassData = createAction<ISingerModel, ISingerModel>(
  SINGER_CHANGE_CLASS_DATA,
  (data: ISingerModel) => {
    return data
  }
)
export const changeSingerListData = createAction<ISingerModel, ISingerModel>(
  SINGER_CHANGE_LISR_DATA,
  (data: ISingerModel) => {
    return data
  }
)

export const getSingerClassData = (rank: Object) => {
  return async (dispatch: Dispatch) => {
    if (immutable.is(rank, immutable.fromJS([]))) {
      const res = await API_getSingerClass()
      dispatch(changeSingerClassData(res.data))
      return
    }
  }
}
export const getSingerListData = (classid: number) => {
  return async (dispatch: Dispatch) => {
    const res = await API_getSingerList(classid)
    dispatch(changeSingerListData(res.data))
    return
  }
}

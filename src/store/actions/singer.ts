import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import { ISingerModel } from 'model'
import {
  SINGER_CHANGE_CLASS_DATA,
  SINGER_CHANGE_LIST_DATA,
  SINGER_CHANGE_INFO_DATA
} from 'constants/index'
import immutable from 'immutable'
import { API_getSingerClass, API_getSingerList, API_getSingerInfo } from 'api'

export const changeSingerClassData = createAction<ISingerModel, ISingerModel>(
  SINGER_CHANGE_CLASS_DATA,
  (data: ISingerModel) => {
    return data
  }
)
export const changeSingerListData = createAction<ISingerModel, ISingerModel>(
  SINGER_CHANGE_LIST_DATA,
  (data: ISingerModel) => {
    return data
  }
)
export const changeSingerInfoData = createAction<ISingerModel, ISingerModel>(
  SINGER_CHANGE_INFO_DATA,
  (data: ISingerModel) => {
    return data
  }
)

export const getSingerClassData = (singerClass: Object) => {
  return async (dispatch: Dispatch) => {
    if (immutable.is(singerClass, immutable.fromJS([]))) {
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
export const getSingerInfoData = (singerid: number) => {
  return async (dispatch: Dispatch) => {
    const res = await API_getSingerInfo(singerid)
    dispatch(changeSingerInfoData(res.data))
    return
  }
}

import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import { IAreaModel } from 'model'
import { AREA_CHANGE_DATA } from 'constants/index'
import { API_getAreaData } from 'api'

export const changeAreaData = createAction<IAreaModel, IAreaModel>(
  AREA_CHANGE_DATA,
  (data: IAreaModel) => {
    return data
  }
)

export const getAreaData = (areaid: number | string) => {
  return async (dispatch: Dispatch) => {
    const res = await API_getAreaData(areaid)
    dispatch(changeAreaData(res.data))
    return
  }
}

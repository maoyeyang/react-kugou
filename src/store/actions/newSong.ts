import { createAction } from 'redux-actions'
import { Dispatch } from 'redux'
import { INewSongModel } from 'model'
import { NEWSONG_CHANGE_DATA } from 'constants/index'
import immutable from 'immutable'
import { API_getNewSongData } from 'api'

export const changeNewSongData = createAction<INewSongModel, INewSongModel>(
  NEWSONG_CHANGE_DATA,
  (data: INewSongModel) => {
    return data
  }
)

export const getNewSongData = (newSong: Object) => {
  return async (dispatch: Dispatch) => {
    if (immutable.is(newSong, immutable.fromJS({}))) {
      const res = await API_getNewSongData()
      dispatch(changeNewSongData(immutable.fromJS(res.data)))
      return
    }
  }
}

import { createAction } from 'redux-actions'
import axios from 'axios'
import { Dispatch } from 'redux'
import { INewSongModel } from 'model'
import { NEWSONG_CHANGE_DATA } from 'constants/index'
import immutable from 'immutable'

export const changeNewSongData = createAction<INewSongModel, INewSongModel>(
  NEWSONG_CHANGE_DATA,
  (data: INewSongModel) => {
    return data
  }
)

export const getNewSongData = (newSong: Object) => {
  return (dispatch: Dispatch) => {
    if (immutable.is(newSong, immutable.fromJS({}))) {
      axios.get('/api/?json=true').then(res => {
        dispatch(changeNewSongData(immutable.fromJS(res.data)))
      })
      return
    }
  }
}

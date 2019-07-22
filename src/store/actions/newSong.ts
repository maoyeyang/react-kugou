import { createAction } from 'redux-actions'
import axios from 'axios'
import { Dispatch } from 'redux'
import { INewSongModel } from 'model'
import { NEWSONG_CHANGE_DATA } from 'constants/index'

export const changeNewSongData = createAction<INewSongModel, INewSongModel>(
  NEWSONG_CHANGE_DATA,
  (data: INewSongModel) => data
)

export const getNewSongData = (newSong: Object) => {
  return (dispatch: Dispatch) => {
    if (JSON.stringify(newSong) === '{}') {
      axios.get('/api/?json=true').then(res => {
        dispatch(changeNewSongData(res.data))
      })
      return
    }
  }
}

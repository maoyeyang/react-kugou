import { createAction } from 'redux-actions'
import axios from 'axios'
import { Dispatch } from 'redux'
import { INewSongModel } from 'model'
import { NEWSONG_CHANGE_DATA } from 'constants/index'

export const changeNewSongData = createAction<INewSongModel, INewSongModel>(
  NEWSONG_CHANGE_DATA,
  (data: INewSongModel) => data
)

export const getNewSongData = () => {
  return (dispatch: Dispatch) => {
    axios.get('/api/?json=true').then(res => {
      const result = res.data
      console.log(result)
      dispatch(changeNewSongData(result))
    })
  }
}

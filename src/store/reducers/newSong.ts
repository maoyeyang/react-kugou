import { handleActions } from 'redux-actions'
import { NEWSONG_CHANGE_DATA } from 'constants/index'
import { INewSongModel } from 'model'
import { defaultNewSongState } from '../defaultStates'

const newSongReducer = handleActions<INewSongModel>(
  {
    [NEWSONG_CHANGE_DATA]: (state: any, action: any) => {
      return {
        ...action.payload
      }
    }
  },
  defaultNewSongState
)

export default newSongReducer

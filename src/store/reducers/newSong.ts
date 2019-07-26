import { handleActions } from 'redux-actions'
import { NEWSONG_CHANGE_DATA } from 'constants/index'
import { INewSongModel } from 'model'
import { defaultNewSongState } from '../defaultStates'
import immutable from 'immutable'

const newSongReducer = handleActions<INewSongModel>(
  {
    [NEWSONG_CHANGE_DATA]: (state: any, action: any) => {
      return immutable.fromJS({
        data: action.payload.data,
        banner: action.payload.banner
      })
    }
  },
  defaultNewSongState
)

export default newSongReducer

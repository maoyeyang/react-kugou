import { handleActions } from 'redux-actions'
// import { NEWSONG_CHANGE_DATA } from 'constants/index'
import { IPlayerModel } from 'model'
import { defaultPlayerState } from '../defaultStates'

const playerReducer = handleActions<IPlayerModel>({}, defaultPlayerState)

export default playerReducer

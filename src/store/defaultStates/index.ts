import { IGlobalModel, INewSongModel } from 'model'
import immutable from 'immutable'

export const defaultGlobalState: IGlobalModel = immutable.fromJS({
  tabbarItem: 0,
  player: {
    playerList: [],
    isPlay: false,
    playInfo: { time: new Date() }
  }
})
export const defaultNewSongState: INewSongModel = immutable.fromJS({})

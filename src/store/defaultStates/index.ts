import { IGlobalModel, INewSongModel, IPlayerModel } from 'model'

export const defaultGlobalState: IGlobalModel = {
  tabbarItem: 0
}
export const defaultNewSongState: INewSongModel = {}

export const defaultPlayerState: IPlayerModel = {
  playerList: [],
  play: false,
  playInfo: {}
}

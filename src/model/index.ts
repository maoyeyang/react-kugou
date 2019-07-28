// 只定义store 中的state的类型 组件的类型定义在组件内部
export interface IStoreModel {
  global: IGlobalModel
  newSong: INewSongModel
}

export interface IGlobalModel {
  tabbarItem: number
  player: {
    playerList: object[]
    isPlay: boolean
    playInfo: object
    lyric: any
  }
  rankInfo: {
    [propName: string]: any
  }
  pListInfo: {
    [propName: string]: any
  }
}

export interface INewSongModel {
  [propName: string]: any
}

export interface IRankModel {
  [propName: string]: any
}

export interface IPListModel {
  [propName: string]: any
}
export interface ISingerModel {
  [propName: string]: any
}
export interface ISearchModel {
  [propName: string]: any
}
export interface IAreaModel {
  [propName: string]: any
}

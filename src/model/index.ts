// 只定义store 中的state的类型 组件的类型定义在组件内部
export interface IStoreModel {
  global: IGlobalModel
  newSong: INewSongModel
}

export interface IGlobalModel {
  tabbarItem: number
}

export interface INewSongModel {
  [propName: string]: any
}

import { createAction } from 'redux-actions'
import { IGlobalModel } from 'model'
import { GLOBAL_CHANGE_TABBAR_ITEM } from 'constants/index'

export const changeTabbarItem = createAction<IGlobalModel, number>(
  GLOBAL_CHANGE_TABBAR_ITEM,
  (tabbarItem: number) => ({ tabbarItem })
)

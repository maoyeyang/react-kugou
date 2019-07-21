import { createAction } from 'redux-actions'
import { IGlobalModel } from '../../model'
import * as constants from '../../constants'

export const changeTabbarItem = createAction<IGlobalModel, number>(
  constants.GLOBAL_CHANGE_TABBAR_ITEM,
  (tabbarItem: number) => ({ tabbarItem })
)

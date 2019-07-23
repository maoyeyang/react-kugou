import { createAction } from 'redux-actions'
import { GLOBAL_CHANGE_TABBAR_ITEM } from 'constants/index'

type TabbarItem = {
  tabbarItem: number
}

export const changeTabbarItem = createAction<TabbarItem, number>(
  GLOBAL_CHANGE_TABBAR_ITEM,
  (tabbarItem: number) => ({
    tabbarItem
  })
)

import { toMainPage, toGameStart } from './utils/menu-router'

export default [
  {
    label: '主页',
    key: 'homePage',
    handle: async () => {
      return await toGameStart()
    },
  },
  {
    label: '结算页',
    key: 'gameFinish',
    handle: async () => {
      return await toMainPage()
    },
  },
]

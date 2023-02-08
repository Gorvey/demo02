const { createRootAutomator2 } = require('root_automator')
const { delay } = require('lang')

const ra = await createRootAutomator2({ root: true })

/**
 * 前往主页
 * @returns Promise
 */
const toHomePage = async () => {
  await delay(100)
  return await ra.tap(200, 200)
}
/**
 * 点击开始游戏
 * @returns Promise
 */
const clickStartGame = async () => {
  await delay(100)
  return await ra.tap(200, 200)
}

//------------------游戏中---------------------//
/**
 * 点击下一回合
 * @returns Promise
 */
const clickNextTurnBtn = async () => {
  await delay(100)
  return await ra.tap(200, 200)
}
/**
 * 点击撤退
 * @returns Promise
 */
const clickFallBack = async () => {
  await delay(100)
  return await ra.tap(200, 200)
}

export default {
  toHomePage,
  clickStartGame,
  clickNextTurnBtn,
  clickFallBack,
}

/*
 * @Author: zengzhe
 * @Date: 2023-02-08 09:45:56
 * @LastEditors: zengzhe
 * @LastEditTime: 2023-02-08 10:40:05
 * @Description:
 */
import capture from './utils/media-projection'
import { scanPlaceFromPic } from './utils.index.js'
import pageMaps from './'

const main = async () => {
  const nowPic = await capture.next()
  // 识别当前位置
  const currentKey = await scanPlaceFromPic(nowPic)
  // 执行当前页面的操作
  await pageMaps[currentKey]['handle']()
  main()
}

main().catch((err) => {
  console.error(err)
})

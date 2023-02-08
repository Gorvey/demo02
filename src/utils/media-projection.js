/*
 * @Author: zengzhe
 * @Date: 2023-02-08 10:07:19
 * @LastEditors: zengzhe
 * @LastEditTime: 2023-02-08 10:13:54
 * @Description:
 */
import { requestScreenCapture } from 'media_projection'
const capturer = await requestScreenCapture()

class Capture {
  constructor() {}
}

export default new Capture()

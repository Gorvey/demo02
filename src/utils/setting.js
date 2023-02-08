/*
 * @Author: zengzhe
 * @Date: 2023-02-08 10:42:11
 * @LastEditors: zengzhe
 * @LastEditTime: 2023-02-08 11:11:16
 * @Description:
 */
const { createDatastore } = require('datastore')
// 创建本地存储，其名称为example.test
const datastore = createDatastore('example.test')

const store = {
  finishTurn: 3, //3,6
}

// 此项目在project.json指定了type: node，因此所有文件默认以nodejs模式运行
// This project specifies type: node in project.json, so all files run in nodejs mode by default
'nodejs'

import { initPermission, initStorage, initMainUI } from './src/init.js'

initPermission()
initStorage()
initMainUI()

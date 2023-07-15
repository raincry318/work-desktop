/*
 * @Author: fengdakang
 * @Date: 2023-02-11 18:50:54
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-15 23:54:48
 * @FilePath: \core\core\preload\preload.js
 * @Description: 渲染进程
 * 
 */


const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  controller: (params) => ipcRenderer.send('controller', params)
})
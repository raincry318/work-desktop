/*
 * @Author: fengdakang
 * @Date: 2023-02-11 18:50:54
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-15 21:59:09
 * @FilePath: \person-tools\core\preload\preload.js
 * @Description: 渲染进程
 * 
 */


const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title)
})
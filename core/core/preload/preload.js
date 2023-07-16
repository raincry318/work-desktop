/*
 * @Author: fengdakang
 * @Date: 2023-02-11 18:50:54
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-16 23:38:50
 * @FilePath: \core\core\preload\preload.js
 * @Description: 渲染进程
 * 
 */


const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  controller: (params) => ipcRenderer.send('controller', params),
  reController: (params) => ipcRenderer.invoke('reController', params),
  common: (params) => ipcRenderer.invoke('common', params)
})
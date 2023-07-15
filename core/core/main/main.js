/*
 * @Author: fengdakang
 * @Date: 2023-02-11 18:51:03
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-16 00:18:24
 * @FilePath: \core\core\main\main.js
 * @Description: 程序主入口
 * 
 */
const { app, BrowserWindow, ipcMain } = require('electron')
const ipcCore = require('../src/ipc/ipc.js')
const path = require('path')

const createWindow = () => {
  // 创建主视窗
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/preload.js')
    }
  })

  // nodeIntegration: true,
  // enableRemoteModule: true,
  // contextIsolation: false

  // 加载 index.html
  //mainWindow.loadFile();
  mainWindow.loadURL('http://127.0.0.1:5173/');

  // 打开开发工具
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// ipcMain 模块
ipcMain.on('controller', (event, arg) => {
  const _ipcCore = new ipcCore();
  _ipcCore.main(event, arg)
})
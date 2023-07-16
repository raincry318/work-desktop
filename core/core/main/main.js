/*
 * @Author: fengdakang
 * @Date: 2023-02-11 18:51:03
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-16 23:51:03
 * @FilePath: \core\core\main\main.js
 * @Description: 程序主入口
 * 
 */
const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const ipcCore = require('../src/ipc/ipc.js')
const _ipcCore = new ipcCore();
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

  // 默认最大化
  mainWindow.maximize()

  // nodeIntegration: true,
  // enableRemoteModule: true,
  // contextIsolation: false

  // 加载 index.html
  //mainWindow.loadFile();
  mainWindow.loadURL('http://127.0.0.1:5173/');

  // 打开开发工具
  mainWindow.webContents.openDevTools()

  Menu.setApplicationMenu(null)
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
  _ipcCore.main(event, arg)
})

ipcMain.handle('reController', async (event, arg) => {
  return await _ipcCore.main(event, arg)
})

ipcMain.handle('common', async (event, arg) => {
  return await _ipcCore.common(event, arg)
})
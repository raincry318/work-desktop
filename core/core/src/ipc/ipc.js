/*
 * @Author: fengdakang
 * @Date: 2023-07-15 23:52:46
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-17 00:15:37
 * @Description: 
 * @FilePath: \core\core\src\ipc\ipc.js
 * 
 */
'use strict';

const dbServerController = require('../controller/dbServerController.js');
const appController = require('../controller/appController.js');
const fUtils = require('../../utils/folder/fileUtils.js');
const appUtils = require('../../utils/applications/appUtils.js');

const _dbServerController = new dbServerController();
const _fileUtils = new fUtils();
const _appUtils = new appUtils();
const _appController = new appController();

let commonFunc = {
  'appUtils': _appUtils,
  'appController': _appController
}


class ipcCore {
  main(event, arg) {
    return new Promise(function(resolve, reject) {
      _fileUtils.getRecents()
      _appUtils.getIcons()

      _dbServerController.getServerList().then((res) => {
        resolve(res);
      });
    })
  }

  common(event, arg) {
    return new Promise(function(resolve, reject) {
      try {
        if (arg == null || arg == undefined) {
          reject('参数错误!');
        }
        if (arg.className == null || arg.className == undefined
          || arg.funcName == null || arg.funcName == undefined) {
          reject('方法名为空！');
        }
        if (commonFunc[arg.className] == null || commonFunc[arg.className] == undefined
          || commonFunc[arg.className][arg.funcName] instanceof Function || commonFunc[arg.className][arg.funcName] instanceof Function) {
          reject('方法不存在！');
        }
  
        commonFunc[arg.className][arg.funcName](arg.params).then((res) => {
          resolve(res);
        });
      } catch (e) {
        reject('[common]|[异常错误]=>' + e);
      }
    })
  }
}

module.exports = ipcCore;
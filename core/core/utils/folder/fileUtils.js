/*
 * @Author: fengdakang
 * @Date: 2023-07-16 17:12:27
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-16 18:39:34
 * @Description: 
 * @FilePath: \core\core\utils\folder\fileUtils.js
 * 
 */
'use strict';

// 常量定义
//// 最近访问文件夹
const recentPath = process.env.USERPROFILE + '\\AppData\\Roaming\\Microsoft\\Windows\\Recent';

let fs = require('fs');

class fUtils {
  getRecents () {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(recentPath)) {
        // 读取最近文件夹内的文件
        let files = fs.readdirSync(recentPath);
        console.log('files', files[0]);
        resolve('fileUtils');
      } else {
        reject('文件夹不存在!');
      }
    })
  }
}

module.exports = fUtils;

/*
 * @Author: fengdakang
 * @Date: 2023-05-05 20:54:06
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-05-05 21:29:52
 * @FilePath: \demo\core\utils\folder_utils\folderLoad.js
 * @Description: 文件夹操作方法
 * 
 */
const fs = require('fs');
const defaultPath = "D:\\测试";

const getDefaultFolderList = function () {
    let folderList = [];
    fs.readdir(defaultPath, (err, files) => {
        if (err) {
            console.log(err);
        } else {
            folderList = files;
        }
    });
    return folderList;
}

export {
  getDefaultFolderList
}
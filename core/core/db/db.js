/*
 * @Author: fengdakang
 * @Date: 2023-07-15 23:37:26
 * @LastEditors: fengdakang
 * @LastEditTime: 2023-07-16 23:57:57
 * @Description: 数据库主文件
 * @FilePath: \core\core\db\db.js
 * 
 */
'use strict';

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

let dbPath = path.join(__dirname, './core.db');

let db = new sqlite3.Database(dbPath);

class dbCore {
  select (sql) {
    return new Promise(function(resolve, reject) {
      db.all(sql, function (err, res){
        resolve(res);
      });
    })
  }
  
  insert (sql) {
    return new Promise(function(resolve, reject) {
      db.run(sql, function (err, res){
        resolve(res);
      });
    })
  }
}

module.exports = dbCore;
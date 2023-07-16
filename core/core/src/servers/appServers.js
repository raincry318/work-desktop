'use strict';

const dbCore = require('../../db/db.js');
const _dbCore = new dbCore();

class appServers {
  async saveApp (item) {

    let insertSql =  `INSERT INTO "main"."e_app_infos"("id", "app_name", "app_exe", "app_sort", "app_img") ` + 
      ` VALUES ({id}, {app_name}, {app_exe}, {app_sort}, {app_img})`;

    insertSql = item.id ? insertSql.replaceAll('{id}', '"' + item.id + '"') : insertSql.replaceAll('{id}', '"2"');
    insertSql = item.id ? insertSql.replaceAll('{app_name}', '"' + item.app_name + '"') : insertSql.replaceAll('{app_name}', '""');
    insertSql = item.id ? insertSql.replaceAll('{app_exe}', '"' + item.app_exe + '"') : insertSql.replaceAll('{app_exe}', '""');
    insertSql = item.id ? insertSql.replaceAll('{app_sort}', '"' + item.app_sort + '"') : insertSql.replaceAll('{app_sort}', '""');
    insertSql = item.id ? insertSql.replaceAll('{app_img}', '"' + item.app_img + '"') : insertSql.replaceAll('{app_img}', '""');
    console.log('insertSql', insertSql);
    let result = await _dbCore.insert(sql);
    return result;
  }
}

module.exports = appServers;
'use strict';

const dbCore = require('../../db/db.js');
const _dbCore = new dbCore();

class dbServerController {
  async getServerList () {
    let sql = 'SELECT * FROM e_app_infos';
    let result = await _dbCore.select(sql);
    console.log('result1', result);
    return result;
  }
}

module.exports = dbServerController;
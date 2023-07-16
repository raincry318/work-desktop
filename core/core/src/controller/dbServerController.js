'use strict';

const appServers = require('../servers/appServers.js');
const _appServers = new appServers();

class dbServerController {
  async getServerList () {
    

    let sql = 'SELECT * FROM e_app_infos';
    let result = await _dbCore.select(sql);
    return result;
  }
}

module.exports = dbServerController;
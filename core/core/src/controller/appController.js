'use strict';

const appServers = require('../servers/appServers.js');
const appUtils = require('../../utils/applications/appUtils.js');
const _appServers = new appServers();
const _appUtils = new appUtils();

class appController {
  async addApp (params) {
    let result = await _appUtils.loadAppIcons(params.name, params.path);
    console.log('addApp', result)
    if (result == null || result == undefined || result == 'error') {
      return result;
    } else {
      let item = {
        app_name: params.name,
        app_exe: params.path,
        app_img: result
      }
      result = await _appServers.saveApp(item);
    }
    return result;
  }
}

module.exports = appController;
'use strict';

const dbServerController = require('../controller/dbServerController.js');

const _dbServerController = new dbServerController();

class ipcCore {
  main(event, arg) {
    let result = _dbServerController.getServerList().then((res) => {
      console.log('result', res);
    });
    return '';
  }
}

module.exports = ipcCore;
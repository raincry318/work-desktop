'use strict';

const IconExtractor = require('icon-extractor');
let fs = require('fs');

let iconConstants = {
  change: 'change'
}
let changeValue = 'change';

// 获取应用图标监听
IconExtractor.emitter.on('icon', function(data) {
  if (data.Context) {
    iconConstants.change = data.Context;
    iconConstants['test'] = data.Base64ImageData;
  }
})

class appUtils {
  loadAppIcons (name, path) {
    return new Promise(function(resolve, reject) {
      IconExtractor.getIcon(name, path)
      
      Object.defineProperty(iconConstants, 'change', {
        enumerable: true,
        configurable:true,
        set: function(newVal) {
          changeValue = newVal
          console.log('set', changeValue, iconConstants['test'])
          if (newVal == name) {
            if (iconConstants[name] == 'error') {
              reject('error');
            } else {
              resolve(iconConstants[name]);
            }
          }
        },
        get: function() {
          console.log('get', changeValue)
          return changeValue
        }
      })
    })
  }

}

module.exports = appUtils;
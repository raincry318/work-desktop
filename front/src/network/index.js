/*
 * @Description: 网络请求管理中心
 * @Author: miiky_yang
 * @Date: 2020-06-22 13:03:38
 * @LastEditors: miiky_yang
 * @LastEditTime: 2020-07-30 12:00:12
 */

const modulesFiles = import.meta.globEager('./apis/*.js')

let modules = {}
for (let item in modulesFiles) {
  const moduleName = item.replaceAll('apis/','').replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles[item]
  modules[moduleName] = new value.default()
}

class Net {

  constructor() {
    Object.entries(modules).forEach(item => {
      this[item[0]] = item[1]
    })
  }
}

const net = new Net()
export default net
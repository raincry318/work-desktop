/*
 * @Description: 文件描述
 * @Author: miiky_yang
 * @Date: 2019-08-05 14:14:19
 * @LastEditors: kukuzhilv 1099273256@qq.com
 * @LastEditTime: 2023-07-14 11:59:20
 */
import axios from 'axios'

const Axios = axios.create({
  baseURL: '/'
})

Axios.defaults.withCredentials = true
Axios.defaults.timeout = 100000

// 添加请求拦截器
Axios.interceptors.request.use(
  _config => {
    // 处理put请求
    if (_config.method == 'put' && _config.data.params) {
      Object.keys(_config.data.params).map(key => {
        let replaceStr = "{" + key + "}"
        _config.url = _config.url.replace(replaceStr, _config.data.params[key])
      })
    }
    return _config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
Axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    if (response.status == 200) {
      response = response.data
    }
    return response
  },
  err => {
    // 对响应错误做点什么
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
        case 401:
          err.message = err.response.data.message
          break
        case 403:
          err.message = '拒绝访问'
          break

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break

        case 408:
          err.message = '请求超时'
          break

        case 500:
          err.message = '服务器内部错误'
          break

        case 501:
          err.message = '服务未实现'
          break

        case 502:
          err.message = '网关错误'
          break

        case 503:
          err.message = '服务不可用'
          break

        case 504:
          err.message = '网关超时'
          break

        case 505:
          err.message = 'HTTP版本不受支持'
          break
      }
      // 判断请求异常信息中是否含有超时timeout字符串
      if (err.message.includes('timeout')) {
        err.message = '请求超时'
      }
    }

    return Promise.reject(err)
  }
)

export default Axios
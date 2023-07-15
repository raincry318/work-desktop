/*
 * @Description: 新闻中心
 * @Author: miiky_yang
 * @Date: 2020-10-21 11:16:32
 * @LastEditors: kukuzhilv 1099273256@qq.com
 * @LastEditTime: 2023-07-13 11:19:08
 */
import Axios from '@/network/axios'

class Common {

  // 获取效力等级左侧目录数
  getXldjTree = (params) => Axios.post('/api/v1/geostar-nj-api/flfg/flfgxldj/getTree', params)

  // 获取详情列表
  getPage = (params) => Axios.post('/api/v1/geostar-nj-api/flfg/flfgzb/getPage', params)

}

export default Common
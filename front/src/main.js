/*
 * @Author: kukuzhilv 1099273256@qq.com
 * @Date: 2023-07-12 09:40:08
 * @LastEditors: kukuzhilv 1099273256@qq.com
 * @LastEditTime: 2023-07-13 10:34:36
 * @FilePath: \front\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router.js'

// 引入通用样式
import '@/assets/styles/common.less'
import '@/assets/styles/element-ui-nj.less'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入组件中文化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 引入所有图标
import * as Icons from '@element-plus/icons'

// 引入网络请求相关
import net from '@/network/index'

const app = createApp(App)

for (const name in Icons) {
    app.component(`el-icon-${name.toLowerCase()}`, Icons[name])
}

app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
})
app.config.globalProperties.$net = net
app.mount('#app')

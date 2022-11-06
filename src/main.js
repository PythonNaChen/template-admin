import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import installElementPlus from './plugins/element'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入全局样式
import '@/styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
// 导入路由鉴权
import './permission'
import * as EleIcons from '@element-plus/icons-vue'

const app = createApp(App)
// installElementPlus(app)
installIcons(app)

for (const name in EleIcons) {
  app.component(name, EleIcons[name])
}
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')

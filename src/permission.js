import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']
// 路由前置首位
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 1. 用户已登录，不允许跳转进 login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 用户未登录，就只能进入 login
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})

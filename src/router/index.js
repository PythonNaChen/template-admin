import { createRouter, createWebHashHistory } from 'vue-router'

/*
* 公开路由表
* */
const publicRoutes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    name: 'LayoutPage',
    component: () => import('@/layout/index')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router

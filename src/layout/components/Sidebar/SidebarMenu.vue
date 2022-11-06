<template>
  <el-menu
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :uniqueOpened="true"
    :collapse-transition="false"
    router
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from '@/layout/components/Sidebar/SidebarItem'

const router = useRouter()
const routes = computed(() => {
  // 过滤完成后的路由数据
  const filterRoutes = filterRouters(router.getRoutes())
  // 解析出包含具体结构的路由数组
  return generateMenus(filterRoutes)
})
// console.log('routes', routes.value)

// 计算高亮 menu 的方法
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<script>
export default {
  name: 'sideBarItem'
}
</script>

<style lang="scss" scoped>
</style>

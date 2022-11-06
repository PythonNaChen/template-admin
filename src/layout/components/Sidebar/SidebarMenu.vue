<template>
  <el-menu
    :unique-opened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 子集 -->
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <!-- 具体菜单 -->
    <el-menu-item index="2">
      <i class="el-icon-location"></i>
      <template #title>导航4</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()
// eslint-disable-next-line no-unused-vars
const routes = computed(() => {
  // 过滤完成后的路由数据
  const filterRoutes = filterRouters(router.getRoutes())
  // 解析出包含具体结构的路由数组
  return generateMenus(filterRoutes)
})
console.log('routes', routes.value)
</script>

<script>
export default {
  name: 'sideBarItem'
}
</script>

<style lang="scss" scoped>
</style>

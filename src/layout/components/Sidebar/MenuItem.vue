<template>
  <!--<i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>-->
  <el-icon
    v-if="icon.includes('el-icon')"
    class="sub-el-icon"
    :class="icon"
  >
    <component :is="iconName" />
  </el-icon>
  <svg-icon v-else :icon="icon"></svg-icon>
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
// 导入的组件可以直接使用
import SvgIcon from '@/components/SvgIcon'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  iconName: {
    type: String
  }
})
</script>

<style lang="scss" scoped></style>

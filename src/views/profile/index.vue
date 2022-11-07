<template>
  <div>
    <el-pagination
      v-model:currentPage="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    {{ $t('msg.test') }}
  </div>
</template>

<script setup>

</script>

<script>
export default {
  name: 'userManage'
}
</script>

<style lang="scss" scoped>
</style>

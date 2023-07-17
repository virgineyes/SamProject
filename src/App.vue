<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <div class="main_wrapper">
        <router-view></router-view>
      </div>
    </div>
  </el-config-provider>
</template>
<style>
.main_wrapper {
  width: 100%;
}
</style>

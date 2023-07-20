<template>
  <el-config-provider namespace="ep">
    <DefaultLayout>
      <template #default>
        <router-view />
      </template>
    </DefaultLayout>
  </el-config-provider>
</template>
<script setup lang="ts">
import DefaultLayout from '~/components/layouts/DefaultLayout.vue'
</script>

<template>
  <el-config-provider>
    <DefaultLayout>
      <template #default>
        <router-view :key="currentRoute" />
      </template>
    </DefaultLayout>
  </el-config-provider>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const $router = useRouter()
const currentRoute = computed(() => {
  return $router.currentRoute.value.fullPath
})
</script>

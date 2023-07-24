<template>
  <el-dropdown @command="handleCommand" class="dropdown-local">
    <span class="el-dropdown-link" v-if="isDesktop">
      Language<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <span v-else class="el-dropdown-link"
      ><el-icon size="20"><LocationFilled /></el-icon
    ></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">Action 1</el-dropdown-item>
        <el-dropdown-item command="b">Action 2</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'

import { ElMessage } from 'element-plus'
import { ArrowDown, LocationFilled } from '@element-plus/icons-vue'

const windowWidth = ref(0)
const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
}
const isDesktop = computed(() => windowWidth.value >= 768)
window.addEventListener('resize', () => {
  windowWidth.value = document.documentElement.clientWidth
})
onMounted(() => {
  windowWidth.value = document.documentElement.clientWidth
})
</script>
<style lang="scss">
.dropdown-local {
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  .el-dropdown-link:focus {
    outline: none;
  }
}
</style>

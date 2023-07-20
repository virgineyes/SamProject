<template>
  <el-dropdown @command="handleCommand" class="dropdown-user">
    <span class="el-dropdown-link" v-if="isDesktop">
      Welcome, XXXXX.XX.XXX<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <span v-else class="el-dropdown-link"
      ><el-icon size="20"><Avatar /></el-icon
    ></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="a">Logout</el-dropdown-item>
        <el-dropdown-item command="b">Switch User</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { ArrowDown, Avatar } from '@element-plus/icons-vue'

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
.dropdown-user {
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  .el-dropdown-link:focus {
    outline: none;
  }
}
</style>

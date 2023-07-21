<template>
  <div>
    <el-container class="layout">
      <el-aside class="aside" width="auto">
        <DesktopAsideMenu v-if="isDesktop" :menuOpen="menuOpen"></DesktopAsideMenu>
        <MobileAsideMenu v-else @closed="menuOpen = false" :menuOpen="menuOpen"></MobileAsideMenu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <DefaultHeader @menuOpen="getCollapsingStatus" />
        </el-header>
        <NavigationHeader v-if="isDesktop"></NavigationHeader>
        <el-container>
          <el-main class="main">
            <slot />
          </el-main>
          <el-footer class="footer"
            >Copyright &copy; 2023 Delta IT . All Rights Reserved.</el-footer
          >
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

import DefaultHeader from './DefaultHeader.vue'
import DesktopAsideMenu from '~/components/layouts/DesktopAsideMenu.vue'
import MobileAsideMenu from '~/components/layouts/MobileAsideMenu.vue'
import NavigationHeader from '~/components/layouts/NavigationHeader.vue'

const menuOpen = ref(false)

function getCollapsingStatus(status: boolean) {
  menuOpen.value = status
}
const isDesktop = computed(() => document.documentElement.clientWidth >= 768)
</script>
<style lang="scss" scoped>
.layout {
  min-height: 100vh;
}
.aside {
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(#000, 0.1);
  overflow: auto;
}
.header,
.footer {
  background-color: #0087dc;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.main {
  background-color: #f0f0f0;
  padding: 32px 24px;
}
.footer {
  p {
    color: white;
    line-height: 60px;
  }
}
</style>

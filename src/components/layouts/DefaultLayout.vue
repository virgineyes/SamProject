<template>
  <div>
    <el-container class="layout">
      <el-aside class="aside" width="auto">
        <DesktopAsideMenu></DesktopAsideMenu>
        <MobileAsideMenu></MobileAsideMenu>
      </el-aside>
      <el-container class="container">
        <el-header class="header">
          <DefaultHeader />
        </el-header>
        <NavigationHeader></NavigationHeader>
        <el-container class="container__main">
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
import DefaultHeader from './DefaultHeader.vue'
import DesktopAsideMenu from '~/components/layouts/DesktopAsideMenu.vue'
import MobileAsideMenu from '~/components/layouts/MobileAsideMenu.vue'
import NavigationHeader from '~/components/layouts/NavigationHeader.vue'
</script>
<style lang="scss" scoped>
.layout {
  height: 100vh;
}
.container {
  height: 100vh;
  &__main {
    overflow-y: auto;
  }
}
.aside {
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(#000, 0.1);
}
.header {
  background-color: basic.$delta-blue;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.main {
  background-color: basic.$delta-light-gray;
  padding: 32px 24px;
}
.footer {
  background-color: basic.$delta-silver-white;
  height: unset;
  text-align: center;
  font-size: 12px;
}
.desktop-aside-menu {
  @media (max-width: 767.98px) {
    display: none;
  }
}
.mobile-sidebar {
  display: none;
  @media (max-width: 767.98px) {
    display: block;
  }
}
.navigation-header {
  @media (max-width: 767.98px) {
    display: none;
  }
}
</style>

<template>
  <div class="default-header">
    <div class="default-header__left">
      <el-icon
        v-show="!menuOpen"
        class="default-header__hamburger"
        @click="changeCollapseStatus(true)"
        size="30px"
        ><Expand
      /></el-icon>
      <el-icon
        v-show="menuOpen"
        class="default-header__hamburger"
        @click="changeCollapseStatus(false)"
        size="30px"
        :color="isDesktop ? '#fff' : '#0087dc'"
        ><Fold
      /></el-icon>
      <a
        class="default-header__left-title"
        :class="{ 'default-header__center-title': !isDesktop }"
        href="javascript:void(0)"
        @click="$router.push('/home')"
      >
        <img class="default-header__logo" src="../../assets/logo_w.svg" />
        <span v-if="isDesktop">System Name</span>
      </a>
    </div>

    <div class="default-header__right">
      <DropdownLocal></DropdownLocal>
      <DropdownUser></DropdownUser>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import DropdownLocal from '~/components/layouts/DropdownLocal.vue'
import DropdownUser from '~/components/layouts/DropdownUser.vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const menuOpen = ref(false)
const emit = defineEmits(['menuOpen'])

function changeCollapseStatus(bool: boolean) {
  emit('menuOpen', bool)
  menuOpen.value = bool
}
const isDesktop = computed(() => document.documentElement.clientWidth >= 768)
</script>
<style lang="scss" scoped>
.default-header {
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  overflow: hidden;
  &__left {
    display: flex;
    align-items: center;
  }
  &__right {
    display: flex;
    align-items: center;
  }
  &__left-title {
    display: inline-flex;
    align-items: baseline;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    margin-top: 15px;
    white-space: nowrap;
  }
  &__center-title {
    margin-top: 0;
  }
  &__logo {
    margin-right: 16px;
  }
  .dropdown-local {
    margin-right: 16px;
  }
  &__hamburger {
    margin-right: 20px;
    cursor: pointer;
    z-index: 100;
  }
}
</style>

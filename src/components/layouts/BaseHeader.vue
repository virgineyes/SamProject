<script lang="ts" setup>
import { toggleDark } from '../../util/composables'
import { useRouter } from 'vue-router'
const router = useRouter()

function handleSelect (val: string) {
  if (val) {
    router.push('/' + val)
  }
}
</script>

<template>
  <el-menu class="text-white" mode="horizontal" @select="handleSelect"  background-color="#00a0e9"
    text-color="#fff"
    active-text-color="#ffd04b">
    <router-link to="/"
      ><img
        alt="Vue logo"
        src="../../assets/logo_w.svg"
        class="logo mr-2 ml-2"
        style=""
    /></router-link>
    <el-menu-item >SQMS DQA</el-menu-item>
    <el-sub-menu index="2" size="large">
      <template #title >DFMEA</template>
      <el-menu-item index="2-1" >item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="info">Info</el-menu-item>
    <div class="flex-grow" />
    <el-button type="danger" class="mt">Switch User</el-button>
    <el-menu-item @click="toggleDark()">Welcome, XXXXXX.XXXX</el-menu-item>
    <!-- <el-menu-item index="4">Orders</el-menu-item> -->
    <el-menu-item @click="toggleDark()" >
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        Switch User
      </button>
    </el-menu-item>
  </el-menu>
</template>

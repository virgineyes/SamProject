<template>
  <div class="home">
    <img alt="Vue logo" class="element-plus-logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite in Delta" />
    <div>{{ token }}</div>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import { base } from '../store/base'
const baseI = base()
let token: string = baseI.getToken

defineProps<{ msg: string }>()
defineComponent({
  name: 'HomeView'
})
</script>
<style lang="scss">
.element-plus-logo {
  width: 50%;
}
</style>

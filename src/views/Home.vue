<script setup lang="ts">
import { defineComponent } from 'vue'
defineProps<{ msg: string }>()
defineComponent({
  name: 'home-view'
})
</script>
<template>
  <div>
    <img alt="Vue logo" class="element-plus-logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite in Delta" />
  </div>
</template>
<style lang="scss">
.element-plus-logo {
  width: 50%;
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" class="element-plus-logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite in Delta" />
    <!-- <div style="word-break: break-word; border: 2px solid deepPink">{{ user }}</div> -->
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'

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

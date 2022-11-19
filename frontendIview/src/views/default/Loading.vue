<template>
  <div id="loading_background">
    <div id="loading_circle_background">
      <circle2
        style="
          top: 8px;
          left: 8px;
          position: absolute;
          width: 32px;
          height: 32px;
          border-color: white white #00a0e9 #00a0e9;
          border-width: 4px;
        "
      ></circle2>
    </div>
  </div>
</template>

<script>
import Circle2 from "vue-loading-spinner/src/components/Circle2"

export default {
  name: "Loading",
  components: {
    Circle2,
  },
}
</script>

<style scoped>
#loading_background {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.32);
}
#loading_circle_background {
  top: 50%;
  left: 50%;
  position: fixed;
  width: 48px;
  height: 48px;
  background-color: white;
  border-radius: 50%;
}
</style>

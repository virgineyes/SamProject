<template>
  <div class="error-page">
    <div class="content-con">
      <div class="text-con">
        <h2>{{ code }}</h2>
        <h3>{{ desc }}</h3>
      </div>
      <back-btn-group class="back-btn-group"></back-btn-group>
    </div>
  </div>
</template>

<script>
import backBtnGroup from "./BackBtnGroup.vue"
export default {
  name: "error_content",
  components: {
    backBtnGroup,
  },
  props: {
    code: String,
    desc: String,
  },
}
</script>
<style></style>

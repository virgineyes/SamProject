<template>
  <article></article>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "GetToken",
  created() {
    this.$router.push(this.getRedirectUrl())
  },
  methods: {
    ...mapGetters(["getRedirectUrl"]),
  },
}
</script>

<style scoped></style>

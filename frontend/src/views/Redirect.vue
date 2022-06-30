<template>
  <div class="wrapper">

  </div>
</template>

<script>

export default {
  components: {
  },
  name: "index",
  bodyClass: "index-page",
  data() {
    return {
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {

  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">

</style>

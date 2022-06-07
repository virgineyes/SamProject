<template>
  <div class="wrapper">
    <div id="images">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-autoㄋ"
          :class="{ 'text-center': responsive }"
        >
          <h4>運動</h4>
          <img
            :src="sport"
            alt="Circle Image"
            class="rounded-circle"
            :class="{ 'responsive-image': responsive }"
          />
        </div>
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          <h4>藝術</h4>
          <img
            :src="art"
            alt="Circle Image"
            class="rounded-circle"
            :class="{ 'responsive-image': responsive }"
          />
        </div>
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          <h4>生活</h4>
          <img
            :src="life"
            alt="Circle Image"
            class="rounded-circle"
            :class="{ 'responsive-image': responsive }"
          />
        </div>
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          <h4>科學</h4>
          <img
            :src="science"
            alt="Circle Image"
            class="rounded-circle"
            :class="{ 'responsive-image': responsive }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      science: require("@/assets/img/science.jpeg"),
      sport: require("@/assets/img/sport.png"),
      art: require("@/assets/img/art.jpeg"),
      life: require("@/assets/img/life.png"),
      responsive: false
    };
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>

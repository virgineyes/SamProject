<template>
  <div class="wrapper">
    <div id="images">
      <div class="md-layout">
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100"
          :class="{ 'text-center': responsive }"
        >
          <h4>Rounded Image</h4>
          <img
            :src="image"
            alt="Rounded Image"
            class="rounded"
            :class="{ 'responsive-image': responsive }"
          />
        </div>
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          <h4>Circle Image</h4>
          <img
            :src="image"
            alt="Circle Image"
            class="rounded-circle"
            :class="{ 'responsive-image': responsive }"
          />
        </div>
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          <h4>Rounded Raised</h4>
          <img
            :src="image"
            alt="Raised Image"
            class="img-raised rounded"
            :class="{ 'responsive-image': responsive }"
          />
        </div>
        <div
          class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto"
          :class="{ 'text-center': responsive }"
        >
          <h4>Circle Raised</h4>
          <img
            :src="image"
            alt="Thumbnail Image"
            class="img-raised rounded-circle"
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
      image: require("@/assets/img/faces/avatar.jpg"),
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

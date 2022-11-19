<template>
  <div>
    <Button size="large" @click="backHome"> <Icon type="ios-home-outline" />Back to home</Button>

    <Button size="large" @click="backPrev">Back to last page({{ second }}s)</Button>
  </div>
</template>

<script>
export default {
  name: "backBtnGroup",
  data() {
    return {
      second: 10,
      timer: null,
    }
  },
  methods: {
    backHome() {
      this.$router.push({
        path: "home",
      })
    },
    backPrev() {
      this.$router.go(-1)
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev()
      else this.second--
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>

<template>
  <div id="app" v-cloak>
    <Header></Header>
    <article class="wanna-container">
      <router-view :key="componentKey" />
    </article>
    <Footer></Footer>
    <BackTop :bottom="50"></BackTop>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
import Header from "@/views/default/Header"
import Footer from "@/views/default/Footer"
import Loading from "@/components/Loading"

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      componentKey: 0,
    }
  },
  methods: {
    ...mapGetters(["getLoading", "getLanguage"]),
    ...mapActions(["setSmallDevice"]),
    reload() {
      this.componentKey++
    },
    windowResizeListener(e) {
      if (typeof e.target !== "undefined") {
        this.setSmallDevice(e.target.innerWidth < 992)
      }
    },
  },
  computed: {
    isLoading() {
      return this.getLoading()
    },
  },
  provide() {
    return {
      reload: this.reload,
    }
  },
  created() {
    window.addEventListener("resize", this.windowResizeListener)
    this.setSmallDevice(window.innerWidth < 992)
  },
  mounted() {
    this.windowResizeListener(this)
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResizeListener)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
.wanna-container {
  height: 100%;
}
</style>

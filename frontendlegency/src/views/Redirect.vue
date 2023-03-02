<template>
  <div class="wrapper">

  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
import { delCookie, setCookie, getCookie } from "@/util/cookie"

export default {
  name: "Redirect",
  bodyClass: "index-page",
  created() {

    let vueInstance = this
    vueInstance.$http
    .get("google-auth/getToken/" + this.$route.query.code.replace('/', '%252F'))
    .then((response) => {
      setCookie(process.env.VUE_APP_AUTH_TOKEN_NAME, response.data, 1000 * 60 * 60 * 5)
      vueInstance.$http
      .get("google-auth/getUserProfile/" + response.data)
      .then((response) => {
        vueInstance.setUser(response.data)
        vueInstance.setLogin(true)
        vueInstance.$router.push("/")
      })
      .catch((error) => {
        // let text = ExceptionHandling(error.response)
        // vueInstance.$Swal.fire({
        //   icon: "error",
        //   title: Translate("COMMON_MESSAGE_ERROR"),
        //   text,
        // })
      })
    })
    .catch((error) => {
      // let text = ExceptionHandling(error.response)
      // vueInstance.$Swal.fire({
      //   icon: "error",
      //   title: Translate("COMMON_MESSAGE_ERROR"),
      //   text,
      // })
    })
  },
  data() {
    return {
      accessToken: null,
    }
  },
  methods: {
    ...mapActions(["toggleLoading", "setUser", "setLogin"]),
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

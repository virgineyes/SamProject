<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="context">
      <div class="userForm">
        <md-field class="formItem">
          <label> 姓名</label>
          <md-input v-model="name"></md-input>
        </md-field>

      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
  
  <script>
  import { mapGetters } from "vuex"
  import { mapActions } from "vuex"
  // import { delCookie, setCookie, getCookie } from "@/util/cookie"
  
  export default {
    name: "EditUserProfile",
    bodyClass: "index-page",
    created() {
    
    },
    data() {
      return {
        accessToken: null,
      }
    },
    methods: {
      ...mapActions(["toggleLoading", "setUser", "setLogin"]),
      ...mapGetters(["getUser"]),
      leafActive() {
        if (window.innerWidth < 768) {
          this.leafShow = false;
        } else {
          this.leafShow = true;
        }
      }
    },
    computed: {
      user() {
        return this.getUser()
      },
      name() {
        return this.user.given_name + " " + this.user.family_name
      }
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
  <style scoped>
    .header {
      height: 80px;
      background: black;
    }
    .context {
      height: 520px;
    }
    .userForm {
      display: flex;
      justify-content: center;
    }

    .formItem {
      width: 600px
    }

    table {
      width: 100%;
    }
  </style>
  
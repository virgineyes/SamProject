<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">玩酷教育</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <!-- <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Components</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/">
                            <i class="material-icons">layers</i>
                            <p>All Components</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://demos.creative-tim.com/vue-material-kit/documentation/"
                          >
                            <i class="material-icons">content_paste</i>
                            <p>Documentation</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li> -->

              <!-- <md-list-item
                href="#"
                target="_blank"
                v-if="showDownload"
              >
                <i class="material-icons">content_paste</i>
                <p>Documentation</p>
              </md-list-item>

              <md-list-item
                href="#"
                @click="scrollToElement()"
                v-if="showDownload"
              >
                <i class="material-icons">cloud_download</i>
                <p>Download</p>
              </md-list-item> -->

              <md-list-item
                href="#"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="hidden-lg">Twitter</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Twitter</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="#"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom"
                  >Like us on Facebook</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="#"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom"
                  >Follow us on Instagram</md-tooltip
                >
              </md-list-item>

              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down" v-if="!isLogin">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">account_circle</i>
                        <p>使用者</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <!-- <li>
                          <a href="#/landing">
                            <i class="material-icons">view_day</i>
                            <p>Landing Page</p>
                          </a>
                        </li> -->
                        <li>
                          <a v-if="user" href="#" @click="login">
                            <p>登入</p>
                          </a> 
                          <!-- <a v-if="user" href="#" @click="login">
                            <p>{{ user.name }}</p>
                          </a>  -->
                        </li>
                        <!-- <li>
                          <a href="#/profile">
                            <i class="material-icons">account_circle</i>
                            <p>Profile Page</p>
                          </a>
                        </li> -->
                      </ul>
                    </drop-down>
                    <drop-down direction="down" v-else>
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">account_circle</i>
                        <p> {{user.given_name}} {{user.family_name}} </p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a v-if="user" href="#" @click="editUserProfile">
                            <p>編輯個人資料</p>
                          </a> 
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import { mapGetters } from "vuex"
import MobileMenu from "@/layout/MobileMenu";
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();
    }, 66);
  }
}
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    user() {
      return this.getUser()
    },
    isLogin() {
      return  this.getLogin()
    }
  },
  methods: {
    ...mapGetters(["getUser", "getLogin"]),
    login() {
      window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=813671208212-oi8h9oossnqb5c5m2blmffrel0tc9b89.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile&redirect_uri=http://localhost:8080/redirect'
    },
    editUserProfile() {
      this.$router.push("/editUserProfile")
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

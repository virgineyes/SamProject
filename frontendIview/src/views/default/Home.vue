<template>
  <div>
    <div class="home-page">
      <img class="logout-img" src="@/assets/home-page.svg" v-if="!isLogin"/>
      <Carousel autoplay :autoplay-speed="20000" loop v-model="value" v-if="isLogin">
        <CarouselItem>
          <img class="login-img" src="@/assets/login-home-page1.png"/>
        </CarouselItem>
        <CarouselItem>
          <img class="login-img" src="@/assets/login-home-page2.png"/>
        </CarouselItem>
      </Carousel>
    </div>
    <h1>
      Hello  {{account}}
    </h1>
  </div>
</template>

<script>
import { typeList } from "../../util/enums/bulletin-board"
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
export default {
  name: "Home",
  mounted() {
    const vueInstance = this
    vueInstance.windowResizeListener(vueInstance)
  },
  data() {
    return {
      value: 0,
      boradValue: 0,
      dataGroupTemp: [],
      dataGroup: [],
    }
  },
  created() {
    window.addEventListener("resize", this.windowResizeListener)
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResizeListener)
  },
  methods: {
    ...mapGetters(["getSmallDevice", "getLogin", "getUserProfile"]),
    ...mapActions(["setLanguage", "setLogin", "toggleLoading"]),
    windowResizeListener(e) {
      if (e.target !== undefined) {
        this.boradValue = 0
        this.buildDataGroup(e.target.innerWidth)
      }
    },
    buildDataGroup(innerWidth) {
      let vueInstance = this
      if (innerWidth < 868) {
        setDataGroup(vueInstance, vueInstance.dataGroupTemp, 1)
      } else if (innerWidth < 1268) {
        setDataGroup(vueInstance, vueInstance.dataGroupTemp, 2)
      } else if (innerWidth < 1664) {
        setDataGroup(vueInstance, vueInstance.dataGroupTemp, 3)
      } else if (innerWidth < 2518) {
        setDataGroup(vueInstance, vueInstance.dataGroupTemp, 4)
      } else {
        setDataGroup(vueInstance, vueInstance.dataGroupTemp, 5)
      }
    }
  },
  computed: {
    isLogin() {
      return this.getLogin()
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      }
    },
    systemRoles() {
      return this.getUserProfile().systemRoles
    },
    account() {
      return this.getUserProfile().user.username
    },
  },
  watch: {
    systemRoles(arr) {
      const vueInstance = this
    },
  },
}

function setDataGroup(vueInstance, dataGroupTemp, number) {
  let result = []
  let temp = []
  dataGroupTemp.forEach((element, index) => {
    element.icon = typeList.find(item => item.value === element.type).icon
    if (index % number === 0 && index !== 0) {
      result.push(temp)
      temp = []
      temp.push(element)
    } else {
      temp.push(element)
    }
  })
  if (temp.length > 0) {
    result.push(temp)
  }
  vueInstance.selectedAnnouncements = result
  vueInstance.dataGroup = result
}
</script>

<style scoped>
.logout-img {
  height: 55vh;
  width: 100%;
}

.login-img {
  height: 35vh;
  width: 100%;
}

.demo-carousel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.box {
  /* height: 400px; */
  border: 1px solid black;
  background-color: white;
}

.content {
  width: 100%;
  display: inline-block;
}

.time-box {
  display: inline-block;
}

.content-box {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.footer-box {
  width: 100%;
  height: 10%;
  padding: 5px;
}

.user {
  display: flex;
  flex-wrap: wrap;
}

.user-content {
  padding: 5px;
  border-bottom: 2px solid black;
}
.vh-68 {
  max-height: 68vh !important;
}
</style>

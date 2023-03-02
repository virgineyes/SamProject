<template>
  <div class="content">
    <div class="flex-container" v-if="isLogin"> 
      <img class="flex-item" width="200" height="300" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/800px-01_of_spades_A.svg.png">
      <div class="flex-column-container">
        <span class="flex-item" style="font-size:56px;">{{ account }}</span>
        <span class="flex-item" style="font-size:36px;">Coin: 1000$</span>
        <span class="flex-item" style="font-size:36px;">Rank: 骨灰級人物</span>
      </div>
    </div>
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
.flex-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1% 4%;
}
.flex-item {
  padding: 0px 5px;
}
.flex-column-container {
  display: flex;
  flex-direction:column;
	flex-wrap:wrap;
  align-items: flex-start
}

.logout-img {
  height: 70vh;
  width: 100%;
}

.login-img {
  height: 70vh;
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
  height: 100vh;
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

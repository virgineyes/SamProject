<template>
  <div class="content">
    <div class="Sidebar" v-if="isLogin">
      <div style="margin: 0px 2px;" class="flex-container">
        <img class="flex-column-container" width="150" height="150" src="../../assets/ace.png" />
        <div class="flex-column-container" style="padding: 10px 20px">
          <span class="flex-item" style="font-size:2em;">{{ account }}</span>
          <span class="flex-item" style="font-size:2em;">Coin: 100000</span>
        </div>
        <img class="flex-column-container" width="150" height="150" src="../../assets/rank.png" />
      </div>
      <div class="flex-container">
        <div class="flex-column-container">
          <span class="flex-item" style="font-size:2em;">每日任務:</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
        </div>
      </div>
      <div class="flex-container">
        <div class="flex-column-container">
          <span class="flex-item" style="font-size:2em;">每周任務:</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
          <span class="flex-item massion">滑板課 20230601(四) 協會中心</span>
        </div>
      </div>
    </div>
    <div class="Body" v-if="isLogin">
      <div class="flex-container">
        <div class="content-box">
          XXX
        </div>
        <div class="content-box">
          XXX
        </div>
      </div>
      <div class="flex-container">
        圖1
      </div>
      <div class="flex-container">
        圖2
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
    },
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
.Sidebar {
  width: 35%;
  float: left;
  height: 98vh;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  background-color: gray;
}
.Sidebar .flex-container {
  display: flex;
  flex-wrap: wrap;
  padding: 1% 5%;
}
.Sidebar .flex-item {
  padding: 0px 5px;
}
.Sidebar .flex-column-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}

.Body {
  width: 65%;
  height: 98vh;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  background-color: #fffaf3;
  float: left;
}
.Body .flex-container {
  display: flex;
  flex-wrap: wrap;
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

.content-box {
  width: 50%;
  height: 300px;
  background: orange;
  display: inline-block;
}

/* .content {
  width: 100%;
  display: inline-block;
  background-color: gainsboro;
} */
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
.massion {
  border-style: solid;
  border-width: 1px;
  width: 100%;
  margin: 1px;
  font-size: 1em;
}
</style>

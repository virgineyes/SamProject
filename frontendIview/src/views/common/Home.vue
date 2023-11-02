<template>
  <div class="content">
    <div class="home-page" v-if="!isLogin">
      <Carousel autoplay :autoplay-speed="20000" loop v-model="value">
        <CarouselItem>
          <img class="login-img" src="@/assets/carouseTwo.png" />
        </CarouselItem>
        <CarouselItem>
          <img class="login-img" src="@/assets/carouselOne.png" />
        </CarouselItem>
      </Carousel>
    </div>
    <div class="Sidebar" v-if="isLogin">
      <div style="margin: 0px 2px;" class="flex-container">
        <img width="150" height="150" src="../../assets/ace.png" />
        <div class="flex-column-container" style="padding: 10px 20px">
          <span class="flex-item" style="font-size:2em;">{{ account }}</span>
          <span class="flex-item" style="font-size:2em;">Coin: 1000000000000</span>
        </div>
        <img width="150" height="150" src="../../assets/rank.png" />
      </div>
      <div style="margin: 0px 2px;" class="flex-container">
        <div class="flex-column-container" style="width: 100%">
          <div class="flex-item">
            <span style="font-size:3em;">每日任務:</span>
          </div>
          <div class="flex-container-left massion">
            <span>
              <div class="massin-text"><Icon type="md-checkmark-circle" style="color: skyblue;" />滑板課(滑板場)</div>
            </span>
          </div>
          <div class="flex-container-left massion">
            <span>
              <div class="massin-text"><Icon type="md-bicycle" style="color: red;" />桌球課(體育館)</div>
            </span>
          </div>
          <div class="flex-container-left massion">
            <span>
              <div class="massin-text"><Icon type="md-bicycle" style="color: red;" />整理協會(協會中心)</div>
            </span>
          </div>
          <div class="flex-container-left massion">
            <span>
              <div class="massin-text"><Icon type="md-bicycle" style="color: red;" />煮飯(協會中心)</div>
            </span>
          </div>
        </div>
      </div>
      <div style="margin: 0px 2px;" class="flex-container">
        <div class="flex-column-container" style="width: 100%">
          <div class="flex-item">
            <span style="font-size:3em;">每周任務:</span>
          </div>
          <div class="flex-container-left massion">
              <div class="massin-text"><Icon type="md-checkmark-circle" style="color: skyblue;" />
                <span>滑板課(滑板場)</span></div>
          </div>
          <div class="flex-container-left massion">
            <span>
              <div class="massin-text"><Icon type="md-bicycle" style="color: red;" />桌球課(體育館)</div>
            </span>
          </div>
          <div class="flex-container-left massion">
            <span>
              <div class="massin-text"><Icon type="md-bicycle" style="color: red;" />整理協會中心協會中心(協會中心)</div>
            </span>
          </div>
          <div class="flex-container-left massion">
            <span>
              <div class="massin-text"><Icon type="md-bicycle" style="color: red;" />煮飯(協會中心)</div>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="Body" v-if="isLogin">
      <div style="margin: 0px 2px;" class="flex-container">
        <div class="content-box">
          <div class="box2">
            <p>selectAll 1</p>
            <p>selectAll 2</p>
            <p>selectAll 3</p>
            <p>selectAll 4</p>
          </div>
        </div>
        <div class="content-box">
          XXX
        </div>
      </div>
      <div style="margin: 0px 2px;" class="flex-container">
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
import * as d3 from "d3"
// import { Bar } from "vue-chartjs"
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js"

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: "Home",
  // components: { Bar },
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
      // chartData: {
      //   labels: ["January", "February", "March"],
      //   datasets: [{ data: [40, 20, 12] }],
      // },
      // chartOptions: {
      //   responsive: true,
      // },
    }
  },
  created() {
    window.addEventListener("resize", this.windowResizeListener)
  },
  mounted() {
    d3.selectAll('.box2 p').style('color', 'red');
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
}
.Sidebar .flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1% 5%;
}
.Sidebar .flex-container-left {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 1% 5%;
}
.flex-item {
  width: 100%;
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

.content-box {
  width: 50%;
  height: 300px;
  /* background: orange; */
  display: inline-block;
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
.massion {
  border-style: solid;
  border-width: 1px;
  margin: 1px;
  font-size: 2em;
  width: 100%;
}
.massion .massin-text {
  margin: 10px 20px;
  text-align: left;
}
</style>

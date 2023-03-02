<template>
  <Select v-model="locale" @on-change="changeLang" style="width: 100px">
    <Option value="zh-TW">繁體中文</Option>
    <Option value="en">English</Option>
  </Select>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: "Locale",
  data() {
    return {
      locale: this.getLanguage(),
    }
  },

  methods: {
    ...mapGetters(["getLanguage"]),
    ...mapActions(["setLanguage"]),
    changeLang() {
      this.setLanguage(this.locale)
    },
  },
  mounted() {
    if (navigator.language.startsWith("en")) {
      this.locale = "en"
    } else {
      this.locale = navigator.language
    }
    this.setLanguage(this.locale)
  },
}
</script>

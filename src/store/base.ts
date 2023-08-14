import { defineStore } from 'pinia'
import { useI18n } from "vue-i18n";

export const base = defineStore('base', {
  state: () => {
    return {
      loading: false,
      login: false,
      language: 'tw',
      user: Object,
      menuOpen: false,
      redirectUrl: ''
    }
  },
  getters: {
    getLoading: (state) => state.loading,
    getLogin: (state) => state.login,
    getLanguage: (state) => state.language,
    getUser: (state) => state.user,
    getRedirectUrl: state => state.redirectUrl
  },
  actions: {
    setLoading(value: boolean) {
      this.loading = value
    },
    setLogin(value: boolean) {
      this.login = value
    },
    setLanguage(value: string) {
      const t = useI18n();
      this.language = value
      t.locale.value = value;
    },
    setUser(value: any) {
      this.user = value
    },
    setRedirectUrl(value: string) {
      this.redirectUrl = value
    },
  }
})

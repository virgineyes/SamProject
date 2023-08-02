import { defineStore } from 'pinia'

export const base = defineStore('base', {
  state: () => {
    return {
      loading: false,
      login: false,
      language: '',
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
      this.language = value
    },
    setUser(value: any) {
      this.user = value
    },
    setRedirectUrl(value: string) {
      this.redirectUrl = value
    },
  }
})

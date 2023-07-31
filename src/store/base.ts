import { defineStore } from 'pinia'

export const base = defineStore('base', {
  state: () => {
    return {
      token: '',
      loading: false,
      language: '',
      user: {},
      menuOpen: false,
    }
  },
  getters: {
    getToken: (state) => state.token,
    getLoading: (state) => state.loading,
    getLanguage: (state) => state.language,
    getUser: (state) => state.user
  },
  actions: {
    setLoading(value: boolean) {
      this.loading = value
    },
    setLanguage(value: string) {
      this.language = value
    },
    setUser(value: object) {
      this.user = value
    }
  }
})

import { defineStore } from 'pinia'
import { authService } from '../services/authService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: authService.getSession(),
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state.user),
  },

  actions: {
    login(credentials) {
      this.user = authService.login(credentials)
    },

    register(data) {
      this.user = authService.register(data)
    },

    logout() {
      authService.logout()
      this.user = null
    },
  },
})
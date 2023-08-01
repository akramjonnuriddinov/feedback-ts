import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      currentUser: {} as any,
      isLoggedIn: false,
    }
  },
  actions: {

  }
})

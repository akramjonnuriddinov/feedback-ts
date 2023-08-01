<template>
  <div
    v-if="authStore.isLoggedIn"
    class="flex items-center justify-between w-full px-6 py-5 mb-5 text-white bg-indigo-950 max-w-825 rounded-10"
  >
    <div class="flex items-center">
      <beaker-icon class="w-6 h-6 mr-4" />
      <p class="text-lg font-bold mr-9">6 Suggestions</p>
      <p class="text-lg font-bold mr-9" v-if="authStore.currentUser">
        {{ authStore.currentUser.displayName }}
      </p>
      <button
        @click="logout()"
        class="text-lg font-bold text-red-600 mr-9"
        v-if="authStore.currentUser"
      >
        /Logout
      </button>
    </div>
    <router-link :to="{ name: 'createFeedback' }">
      <primary-btn bg-color="bg-primary" text="+ Add Feedback" />
    </router-link>
  </div>
  <div
    v-else
    class="flex items-center justify-between w-full px-6 py-5 mb-5 text-white bg-indigo-950 max-w-825 rounded-10"
  >
    <div class="flex items-center mr-auto">
      <beaker-icon class="w-6 h-6 mr-4" />
      <p class="text-lg font-bold mr-9">Product feedback</p>
    </div>
    <router-link class="mr-5 hover:text-blue-500" :to="{ name: 'login' }"> Login </router-link>
    <router-link class="hover:text-blue-500" :to="{ name: 'register' }"> Register </router-link>
  </div>
</template>

<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/24/solid'
import PrimaryBtn from './PrimaryBtn.vue'
import { useAuthStore } from '@/stores/auth'
import { getAuth, signOut } from 'firebase/auth'

const authStore = useAuthStore()
const auth = getAuth()

const logout = () => {
  signOut(auth)
    .then(() => {
      authStore.isLoggedIn = false
      authStore.currentUser = {}
    })
    .catch((error) => {
      console.log('singout error: ', error)
    })
}
</script>

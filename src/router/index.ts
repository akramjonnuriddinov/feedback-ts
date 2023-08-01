import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateFeedback from '@/views/CreateFeedback.vue'
import TheRegister from '@/views/TheRegister.vue'
import TheLogin from '@/views/TheLogin.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/createFeedback',
      name: 'createFeedback',
      component: CreateFeedback
    },

    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/register',
      name: 'register',
      component: TheRegister
    },
    {
      path: '/login',
      name: 'login',
      component: TheLogin
    }
  ]
})

const getCurrentUser = () => {
  return new Promise<void>((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user: any) => {
        removeListener()
        resolve(user)
        console.log(user.displayName)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser) {
      next()
    } else {
      // alert('you dont have access')
      next('/')
    }
  }
  else {
    next()
  }
})

export default router

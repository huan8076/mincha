import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import managementFee from './routes/managementFee'
import managementFeeKGI from './routes/managementFeeKGI'
import postal from './routes/postal'

const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: async () => await import('@/views/404.vue')
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: async () => await import('@/views/index.vue')
  },
  notFoundRoute,
  ...managementFee,
  ...managementFeeKGI,
  ...postal
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to) => {
  if (to.meta?.title && typeof to.meta.title === 'string') {
    document.title = to.meta.title
  } else if (import.meta.env.VITE_APP_NAME) {
    document.title = import.meta.env.VITE_APP_NAME
  }
})

export default router

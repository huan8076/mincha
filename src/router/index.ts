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
      title: '首頁',
      showFooter: true
    },
    component: async () => await import('@/views/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登入'
    },
    component: async () => await import('@/views/Login.vue')
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
  // 檢查 localStorage 是否有 login 欄位
  const isLoggedIn = localStorage.getItem('loginData')

  // 如果沒有 login 欄位，且目標路徑不是 /login，則跳轉到 /login
  if (!isLoggedIn && to.name !== 'login') {
    return { name: 'login' }
  }

  // 設定頁面標題
  if (to.meta?.title && typeof to.meta.title === 'string') {
    document.title = to.meta.title
  } else if (import.meta.env.VITE_APP_NAME) {
    document.title = import.meta.env.VITE_APP_NAME
  }
})

export default router

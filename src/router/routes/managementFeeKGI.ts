import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw[] = [
  {
    path: '/fee-kgi/',
    meta: {
      title: '管理費V4'
    },
    children: [
      {
        path: '',
        redirect: { name: 'FeeKGIPaymentList' }
      },
      {
        path: 'payment',
        name: 'FeeKGIPaymentList',
        component: async () => await import('@/views/example/managementFeeKGI/Payment.vue')
      }
    ]
  }
]

export default route
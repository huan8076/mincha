import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw[] = [
  {
    path: '/fee/',
    meta: {
      title: '管理費V3'
    },
    children: [
      {
        path: '',
        redirect: { name: 'FeePaymentList' }
      },
      {
        path: 'payment',
        name: 'FeePaymentList',
        component: async () => await import('@/views/example/managementFee/Payment.vue')
      }
    ]
  }
]

export default route
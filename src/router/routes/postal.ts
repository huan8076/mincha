import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw[] = [
  {
    path: '/postal/',
    meta: {
      title: '包裹'
    },
    children: [
      {
        path: '',
        redirect: { name: 'PostalList' }
      },
      {
        path: 'list',
        name: 'PostalList',
        component: async () => await import('@/views/example/postal/index.vue')
      }
    ]
  }
]

export default route
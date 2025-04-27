import { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw[] = [
  {
    path: '/educationTraining/',
    meta: {
      title: '教育訓練'
    },
    children: [
      {
        path: '',
        redirect: { name: 'educationTrainingList' }
      },
      {
        path: 'list',
        name: 'educationTrainingList',
        component: async () => await import('@/views/educationTraining/EducationTrainingList.vue')
      },
      {
        path: 'detail',
        name: 'educationTrainingDetail',
        component: async () => await import('@/views/educationTraining/EducationTrainingDetail.vue')
      },
      {
        path: 'chapter',
        name: 'educationTrainingChapter',
        component: async () => await import('@/views/educationTraining/EducationTrainingChapter.vue')
      }
    ]
  }
]

export default route
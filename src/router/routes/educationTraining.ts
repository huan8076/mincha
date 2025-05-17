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
        path: 'course/:courseId',
        name: 'educationTrainingCourse',
        component: async () => await import('@/views/educationTraining/EducationTrainingCourse.vue')
      },
      {
        path: 'chapter/:courseId/:index?',
        name: 'educationTrainingChapter',
        component: async () => await import('@/views/educationTraining/EducationTrainingChapter.vue')
      }
    ]
  }
]

export default route
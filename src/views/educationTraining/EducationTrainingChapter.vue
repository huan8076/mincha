<template>
  <q-page-container id="educationTrainingChapter">
    <q-header class="">
      <q-toolbar>
        <q-toolbar-title class="text-left">
          {{ chapterData?.chapter ?? '' }}
        </q-toolbar-title>
        <q-icon name="close" size="38px" @click="router.back()" />
      </q-toolbar>
    </q-header>
    <div class="educationTrainingChapter__content page">
      <div class="content__image">
        <img src="@/assets/images/login/login_top_img.png" />
      </div>
      <div class="content__wrapper">
        <div class="content__step" @click="showStep = true">
          <p>
            {{ `全步驟(${chapterData?.stepList.length})` }}
          </p>
        </div>
        <div class="content__index">
          {{ stepIndex + 1 }}
        </div>
        <div class="content__intro">
          <div class="content__intro__title">
            {{ chapterData?.stepList[stepIndex].step ?? '' }}
          </div>
          <div class="content__intro__text">
            {{ chapterData?.stepList[stepIndex].description ?? '' }}
          </div>
        </div>
      </div>
    </div>
    <div class="footer__wrapper">
      <div class="footer__button">
        <div class="btn btn-Outline btn-Rounded" @click="onPreviousStep">
          {{ stepIndex > 0 ? '上一步' : '回教育訓練' }}
        </div>
        <div class="btn btn-Filled btn-Rounded" @click="onNextStep">
          {{ stepIndex < (chapterData?.stepList.length ?? 0) - 1 ? '下一步' : '結束' }}
        </div>
      </div>
    </div>
  </q-page-container>
  <q-dialog v-model="showStep" allow-focus-outside maximized position="bottom">
    <education-training-chapter-step @close="onCloseDialog" />
  </q-dialog>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import EducationTrainingChapterStep from './components/EducationTrainingChapterStep.vue'
import educationTrainingData from '@/assets/jsonData/educationTraining.json'
import { Course, Chapter } from '@/types/EducationTrainingTypes'

const router = useRouter()
const route = useRoute()

const courseId = Number(route.params.courseId)
const chapterId = Number(route.params.chapterId)

// 篩選對應的課程資料
const courseData = ref<Course | undefined>(
  educationTrainingData.find((course) => course.id === courseId)
)

// 從 courseData 中篩選對應的章節資料
const chapterData = computed<Chapter | undefined>(() => {
  if (!courseData.value || !courseData.value.chapterList) {
    return undefined
  }
  return courseData.value.chapterList.find((chapter) => chapter.id === chapterId)
})

const showStep = ref(false) // 是否顯示步驟彈跳視窗

const onCloseDialog = (): void => {
  showStep.value = false
}

const stepIndex = ref(0) // 當前步驟索引
const onNextStep = (): void => {
  if (stepIndex.value < (chapterData.value?.stepList.length ?? 0) - 1) {
    stepIndex.value++
  } else {
    router.back()
  }
}
const onPreviousStep = (): void => {
  if (stepIndex.value > 0) {
    stepIndex.value--
  } else {
    router.back()
  }
}
</script>

<style lang="scss" scoped>
#educationTrainingChapter {
  padding-bottom: 80px;
}

.content__image {
  position: relative;
  background-color: $SystemWhite;
  z-index: 2;
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
}
.content__wrapper {
  position: relative;
  display: flex;
  padding: 40px 0 20px 0;
  z-index: 1;
}
.content__step{
  position: absolute;
  top: -12px;
  right: 5px;
  padding: 4px;
  cursor: pointer;

  p {
    padding: 4px 0;
    font-size: 13px;
    color: $SystemPrimary;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 15px;
    background-color: $SystemPrimary;
    border-radius: 50em;
  }

  &:active {
    opacity: 0.8;
  }
}

.content__index {
  width: 15%;
  min-width: 50px;
  max-width: 200px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}
.content__intro {
  padding-right: 20px;

  &__title {
    font-size: 20px;
    padding: 10px 0;
    margin-bottom: 10px;
  }

  &__text {
    font-size: 16px;
  }
}
.footer__wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: $SystemWhite;
  border-top: 1px solid #CCC;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}
.footer__button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 600px;

  .btn {
    width: 150px;
  }
}
</style>
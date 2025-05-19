<template>
  <q-page-container id="educationTrainingCourse">
    <q-header class="page__header">
      <q-toolbar>
        <q-icon name="arrow_back" class="cursor-pointer" size="38px" @click="router.back()" />
        <q-toolbar-title class="text-center"></q-toolbar-title>
      </q-toolbar>
      <div class="page__header__edge">
        <div class="page__header__edge__content">
          <p class="page__header__edge__title">
            {{ courseData?.course ?? '' }}
          </p>
        </div>
        <img src="@/assets/images/educationTraining/educationTraining_top_img.png" class="page__header__edge__image" alt="login background" />
      </div>
    </q-header>
    <div class="content__upperEdge">
      <div class="content__courseImage"></div>
    </div>
    <div class="educationTrainingCourse__content page">
      <p class="content__intro">
        {{ courseData?.courseNote ?? '' }}
      </p>
      <p class="content__stepIntro">
        {{ resolvedStepString }}
      </p>
      <div class="content__course">
        <p class="content__course__title">
          學習主題
        </p>
        <div class="content__course__list">
          <div class="content__course__item">
            <img src="@/assets/images/educationTraining/default-user.png" alt="">
            <p>20 小時教學影片</p>
          </div>
          <div class="content__course__item">
            <img src="@/assets/images/educationTraining/default-user.png" alt="">
            <p>10 篇圖文說明教材</p>
          </div>
          <div class="content__course__item">
            <img src="@/assets/images/educationTraining/default-user.png" alt="">
            <p>50 項實作檢核練習</p>
          </div>
        </div>
        <div class="content__course__button" @click="showBottomSheet = true">
          前往學習
        </div>
      </div>
    </div>

    <q-dialog v-model="showBottomSheet" allow-focus-outside maximized position="bottom">
      <education-training-course-popup :chapter-list="chapterList" @close="onCloseDialog" @click-chapter-item="onClickChapterItem" />
    </q-dialog>
  </q-page-container>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import EducationTrainingCoursePopup from './components/EducationTrainingCoursePopup.vue'
import educationTrainingData from '@/assets/jsonData/educationTraining.json'
import { Course } from '@/types/EducationTrainingTypes'

const router = useRouter()
const route = useRoute()
const courseId = Number(route.params.courseId)
const courseData = ref<Course | undefined>(
  educationTrainingData.find((course) => course.id === Number(courseId))
)

const resolvedStepString = computed((): string => {
  // 確保 courseData 和 chapterList 存在
  if (!courseData.value || !courseData.value.chapterList) {
    return ''
  }

  // 從 chapterList 中提取 chapter 欄位並拼接
  return courseData.value.chapterList
    .map(chapter => chapter.chapter) // 提取 chapter 欄位
    .filter(Boolean) // 過濾掉空值或 undefined
    .join(' / ') // 使用 " / " 拼接
})

const chapterList = courseData.value?.chapterList ?? [] // 章節列表
const showBottomSheet = ref(false)

const onCloseDialog = (): void => {
  showBottomSheet.value = false
}

// chpaterIndex 章節步驟
const onClickChapterItem = (chapterId: number): void => {
  console.log(`Clicked chapter item with Index: ${chapterId}`)

  router.push({
    name: 'educationTrainingChapter',
    params: { courseId: courseId.toString(), chapterId: chapterId.toString() }
  })
}

</script>

<style lang="scss" scoped>
.q-header.page__header {
  height: 200px;
  overflow: hidden;
  z-index: 1;
}
.q-toolbar {
  z-index: 2;
}
.page__header-edge {
  position: absolute;
  top: 0;
}
.page__header-edge {
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
  padding-top: 50px;
  z-index: 1;
}

.page__header__edge__content {
  padding: 12px 0 0 40px
}

.page__header__edge__title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

.page__header__edge__image {
  position: absolute;
  height: 150px;
  right: 0;
  bottom: 20px;
}
.educationTrainingCourse__content {
  position: relative;
  padding: 0 40px 20px 40px;
}

.content__upperEdge {
  position: absolute;
  height: 50px;
  top: 151px; //避免某些畫面上會有1px隙縫露出
  width: 100%;
  background-color: $SystemGray;
  z-index: 10;
  border-radius: 20px 20px 0 0;
}
.content__courseImage {
  position: absolute;
  left: 40px;
  bottom: 0px;
  width: 80px;
  height: 80px;
  background-image: url('@/assets/images/educationTraining/item_preparation.png');
  background-size: cover;
  background-position: center;
}
.content__intro {
  padding: 24px 0;
  line-height: 1.2;
}
.content__stepIntro {
  padding: 4px 0 4px 8px;
  line-height: 1.2;
  border-left: 2px solid #3968FF;
  font-size: 13px;
  color: #666666;
}
.content__course{
  padding: 12px 0;
}
.content__course__title {
  font-size: 24px;
  font-weight: bold;
  padding: 8px 0;
}

.content__course__item {
  display: flex;
  align-items: center;
  padding: 8px 0;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    padding-left: 12px;
    font-size: 20px;
    font-weight: bold;
    color: #222222;
  }
}

.content__course__button {
  margin: 20px auto 0;
  width: 80%;
  max-width: 240px;
  padding: 12px 0;
  text-align: center;
  background-color: $SystemYellow;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50em;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
}
</style>
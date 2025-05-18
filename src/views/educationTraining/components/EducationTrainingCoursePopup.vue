<template>
  <div id="educationTrainingCoursePopup">
    <div class="content__upperEdge">
      <div class="content__courseImage"></div>
      <q-icon name="close" class="cursor-pointer content_close" size="38px" @click="onClose" />
    </div>
    <div class="educationTrainingCoursePopup__content page">
      <q-list>
        <q-item
          v-for="chapter in chapterList"
          :key="chapter.id"
          clickable
          @click="onClickChapterItem(chapter.id)"
        >
          {{ chapter.chapter }}
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

interface Chapter {
  id: number
  chapter: string
}

defineProps<{
  chapterList: Chapter[]
}>()

const emit = defineEmits(['close', 'clickChapterItem'])
const onClose = (): void => {
  emit('close')
}

const onClickChapterItem = (chpaterId: number): void => {
  emit('clickChapterItem', chpaterId)
}

</script>
<style lang="scss" scoped>
#educationTrainingCoursePopup {
  padding-top: 200px;
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
.content_close {
  position: absolute;
  right: 20px;
  bottom: 0px;
}
.educationTrainingCoursePopup__content {
  position: relative;
  height: calc(100vh - 200px);
  background-color: $SystemGray;
}
.q-list {
  height: 100%;
  padding: 20px 40px;
  overflow-y: auto;
}
.q-item {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);;
}
.q-item:last-child {
  border-bottom: none;
}
</style>
<template>
  <q-page-container id="educationTrainingList">
    <q-header class="page__header">
      <q-toolbar>
        <q-icon name="arrow_back" class="cursor-pointer" size="38px" @click="router.back()" />
        <q-toolbar-title class="text-center"></q-toolbar-title>
        <q-icon name="search" size="38px" />
      </q-toolbar>
      <div class="page__header__edge">
        <div class="page__header__edge__content">
          <p class="page__header__edge__title">
            教育訓練
          </p>
          <div class="page__header__edge__tag tag primary">
            #新手等級
          </div>
        </div>
        <img src="@/assets/login/exampleBG.png" class="page__header__edge__image" alt="login background" />
      </div>
    </q-header>
    <div class="educationTrainingList__content page">
      <q-list>
        <template v-for="(chapterItem, index) in chapterList" :key="index">
          <education-training-item
            :item-data="chapterItem"
            @click="onChapterItemClick(chapterItem.id)"
          />
          <q-separator v-if="index !== chapterList.length - 1" class="item__separator" spaced inset />
        </template>
      </q-list>
    </div>
  </q-page-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import EducationTrainingItem from './components/EducationTrainingItem.vue'
const router = useRouter()

const chapterList = ref([
  {
    id: 1,
    title: '新手訓練',
    description: '新手訓練課程，讓你快速上手',
    completed: true
  },
  {
    id: 2,
    title: '進階訓練',
    description: '進階訓練課程，讓你更上一層樓',
    completed: true
  },
  {
    id: 3,
    title: '專業訓練',
    description: '專業訓練課程，讓你成為行業專家',
    completed: false
  },
  {
    id: 4,
    title: '高級訓練',
    description: '高級訓練課程，讓你成為行業領袖',
    completed: false
  },
  {
    id: 5,
    title: '專家訓練',
    description: '專家訓練課程，讓你成為行業大師',
    completed: false
  }
])

/**
 * 處理章節項目點擊事件，導航至章節詳情頁
 * @param id - 被點擊項目的ID
 */
const onChapterItemClick = (id: number) => {
  router.push({
    name: 'educationTrainingDetail',
    params: { id: id.toString() }
  })
}

</script>

<style lang="scss" scoped>
#educationTrainingList {}

.q-header.page__header {
  height: 170px;
  border-radius: 0 0 25px 25px;
  overflow: hidden;
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
  height: 170px;
  padding-top: 50px;
  z-index: 1;
}

.page__header__edge__content {
  padding: 12px 0 0 40px
}

.page__header__edge__title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 10px;
}

.page__header__edge__image {
  position: absolute;
  height: 150px;
  right: 0;
  bottom: 0;
}

.educationTrainingList__content {
  padding: 20px 0;
}

.item__separator {
  margin-left: 112px;
}

</style>
<template>
  <div id="educationTrainingChapterStep">
    <div class="header">
      <q-toolbar>
        <q-toolbar-title class="text-left step__title">
          全步驟(11)
        </q-toolbar-title>
        <q-icon name="close" size="38px" @click="onClose" />
      </q-toolbar>
    </div>
    <div class="educationTrainingChapterStep__content">
      <div class="step__list">
        <div class="step__item step__item--active">
          <div class="step__item__indexLine">
            01
          </div>
          <div class="step__item__text">
            冬瓜煮熱水量比例是否正確
          </div>
        </div>
        <div class="step__item">
          <div class="step__item__indexLine">
            02
          </div>
          <div class="step__item__text">
            冬瓜比例是否正確並平放？
          </div>
        </div>
        <div class="step__item">
          <div class="step__item__indexLine">
            03
          </div>
          <div class="step__item__text">
            冬瓜煮製功率是否正確？ 3500w轉1500w
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

// 定義 emit 事件
const emit = defineEmits(['close'])

const onClose = (): void => {
  emit('close')
}
</script>

<style scoped lang="scss">
#educationTrainingChapterStep {
  width: 100%;
  height: 100vh;
  background-color: $SystemGray;
}
.header {
  .step__title {
    color: $SystemPrimary;
    font-weight: bold;
  }
  .q-icon {
    color: $SystemPrimary;
  }
}
.educationTrainingChapterStep__content {
  height: calc(100vh - 50px);
  overflow-y: auto;
}
.step__list {
  padding: 10px 20px;
}
.step__item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;

  &__indexLine {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    flex: 0 0 40px; // 固定寬度為 40px，且不會被壓縮
    justify-content: center;
    align-items: center;
    background-color: $SystemWhite; // 白底
    color: $SystemPrimary; // 藍字
    font-size: 16px;
    font-weight: bold;
    border: 1px solid $SystemPrimary;
    border-radius: 50%;

    &::before {
      content: '';
      display: block;
      position: absolute;
      margin: 0 auto;
      top: -13px;
      width: 2px;
      height: 12px;
      background-color: $SystemPrimary;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      margin: 0 auto;
      bottom: -13px;
      width: 2px;
      height: 12px;
      background-color: $SystemPrimary;
    }
  }

  // 第一個項目不顯示 ::before
  &:first-child .step__item__indexLine::before {
    display: none;
  }

  // 最後一個項目不顯示 ::after
  &:last-child .step__item__indexLine::after {
    display: none;
  }

    // 狀態：active
  &--active .step__item__indexLine{
    background-color: $SystemPrimary; // 藍底
    color: $SystemWhite; // 白字
    border: 1px solid $SystemPrimary;
  }

  &__text {
    flex: 1; // 讓文字區域自動填滿剩餘空間
    margin-left: 20px;
    font-size: 16px;
    word-break: break-word; // 避免文字過長時溢出
  }
}
</style>
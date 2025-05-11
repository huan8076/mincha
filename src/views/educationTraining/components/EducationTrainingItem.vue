<template>
  <q-item clickable class="cursor-pointer">
    <q-item-section center avatar>
      <div class="trainingItem__icon">
        <q-avatar>
          <img :src="itemData.image">
        </q-avatar>
      </div>
    </q-item-section>

    <q-item-section>
      <q-item-label class="trainingItem__title q-mb-md ">
        {{ itemData.title }}
      </q-item-label>
      <q-item-label class="trainingItem__Desc" lines="2">
        {{ itemData.description }}
      </q-item-label>
    </q-item-section>

    <q-item-section side center>
      <q-icon name="check_circle" :class="itemData.completed ? 'trainingItem__status--completed': 'trainingItem__status--uncompleted'" />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
// props
// 定義 itemData 的型別
interface ItemData {
  id: number
  title: string
  description: string
  completed: boolean
  image: string
}

// props
const { itemData } = defineProps<{ itemData: ItemData }>()
</script>

<style lang="scss" scoped>
.trainingItem__icon {
  width: 80px;
  height: 80px;
  background-color: #3968FF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trainingItem__title {
  font-size: 20px;
  color: $SystemPrimary;
}

.trainingItem__status--completed {
  color: #2E7D32;
}
.trainingItem__status--uncompleted {
  color: #AAA;
}
</style>
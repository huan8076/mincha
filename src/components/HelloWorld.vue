<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="addCount(addNumber)">
      add count
      <input v-model="addNumber" type="number" @click.stop>
    </button>
    <button type="button" @click="switchLanguage('enUS')">
      switch language to en-US
    </button>
    <button type="button" @click="switchLanguage('zhTW')">
      switch language to zh-TW
    </button>
  </div>

  <div>
    <button type="button" @click="emit('updateNumber', updateNumber)">
      update number
      <input v-model="updateNumber" type="number" @click.stop>
    </button>
    <span>
      props number: {{ showNumber }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useHelloWorldStore } from '@/stores'
const { addCount } = useHelloWorldStore()
const { locale } = useI18n()

type propsType = {
  msg: string
  showNumber: number
}
type emitsType = {
  (e: 'updateNumber', value: number): void
}
const props = withDefaults(defineProps<propsType>(), {
  msg: 'default msg',
  showNumber: 0
})
const emit = defineEmits<emitsType>()

const addNumber = ref<number>(1)
const updateNumber = ref<number>(props.showNumber)
const switchLanguage = (language: string) => {
  localStorage.setItem('language', language)
  locale.value = language
}
</script>

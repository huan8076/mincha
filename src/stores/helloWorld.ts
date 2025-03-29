export const useHelloWorldStore = defineStore('helloWorld', () => {
  const count = ref<number>(0)

  const addCount = (addNumber: number): void => {
    if (typeof addNumber !== 'number') return
    count.value += addNumber
  }

  return {
    count,
    addCount
  }
})
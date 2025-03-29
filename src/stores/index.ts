import { useHelloWorldStore } from './helloWorld'
import { useCommonStore } from './common'

const store = createPinia()

export { useHelloWorldStore, useCommonStore }

export default store

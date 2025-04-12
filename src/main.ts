import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
import i18n from './locales'
import './types/axios.d.ts'

// Quasar
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass' // Quasar css
import '@quasar/extras/material-icons/material-icons.css' // 引入 icon 套件（Material Icons）
import quasarLang from 'quasar/lang/zh-TW'

// style
import '@/styles/reset.css'
import '@/styles/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang
})

app.mount('#app')

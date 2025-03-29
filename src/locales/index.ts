import { createI18n } from 'vue-i18n'
import enUS from './lang/en-US'
import zhTW from './lang/zh-TW'

const messages = {
  enUS,
  zhTW
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'zhTW',
  fallbackLocale: 'zhTW',
  messages
})

export default i18n
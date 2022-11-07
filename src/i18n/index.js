import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {
      test: 'Hello World'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
    }
  }
}

const locale = 'en'

const i18n = createI18n({
  // 使用 composition API
  legacy: false,
  // 全局使用T函数
  globalInjection: true,
  locale,
  messages
})

export default i18n

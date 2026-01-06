import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './infrastructure/i18n/i18n.js'

createApp(App).use(i18n).mount('#app')

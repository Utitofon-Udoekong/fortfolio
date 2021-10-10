import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// import AppLayout from '@/layouts/AppLayout.vue'

createApp(App).use(store).use(router).mount('#app')
// createApp(App).use(store).use(router).component('AppLayout', AppLayout).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueApexCharts from "vue3-apexcharts";
import AppLayout from '@/layouts/AppLayout.vue'

createApp(App).use(store).use(router).use(VueApexCharts).component('AppLayout', AppLayout).mount('#app')
// createApp(App).use(store).use(router).mount('#app')

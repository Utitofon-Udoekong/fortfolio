import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueApexCharts from "vue3-apexcharts";
import { VueEcharts } from 'vue3-echarts';
import AppLayout from '@/layouts/AppLayout.vue'
import {auth} from "./firebase";

let app;
auth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App).use(store).use(router).use(VueApexCharts).component('AppLayout', AppLayout).component('VueEcharts', VueEcharts).mount('#app')
    }
})

// createApp(App).use(store).use(router).mount('#app')

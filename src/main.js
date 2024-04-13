import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import BackHome from "./components/BackHome.vue";
import user from "@/stores/index.js";
import {createPinia} from "pinia";

createApp(App)
    .use(router)
    .use(user)
    .use(createPinia())
    // 全局引用组件
    .component('BackHome', BackHome)
    .mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import BackHome from "./components/BackHome.vue";
import user from "@/store/index.js";

createApp(App)
    .use(router)
    .use(user)
    // 全局引用组件
    .component('BackHome', BackHome)
    .mount('#app')

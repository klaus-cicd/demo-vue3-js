import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import BackHome from "./components/BackHome.vue";

createApp(App)
    .use(router)
    // 全局引用组件
    .component('BackHome', BackHome)
    .mount('#app')

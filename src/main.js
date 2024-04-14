import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import BackHome from "./components/BackHome.vue";
import user from "@/stores/index.js";
import {createPinia} from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

createApp(App)
    .use(router)
    .use(user)
    .use(createPinia().use(piniaPluginPersist))
    // 全局引用组件
    .component('BackHome', BackHome)
    .mount('#app')

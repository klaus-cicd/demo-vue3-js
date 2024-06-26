import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import BackHome from "./components/BackHome.vue";
import user from "@/stores/index.js";
import {createPinia} from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";


let app = createApp(App);
let pinia = createPinia().use(piniaPluginPersist);

app.use(router)
    .use(user)
    .use(pinia)
    // 全局引用组件
    .component('BackHome', BackHome)
    .mount('#app');
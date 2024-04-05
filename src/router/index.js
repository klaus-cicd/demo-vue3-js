import {createRouter, createWebHistory} from "vue-router";

import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue")
    },
    {
        path: '/reactive',
        name: 'Reactive',
        component: () => import("@/views/ReactiveObj.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
import {createRouter, createWebHistory} from "vue-router";

import Home from "../views/Home.vue";
import Watch from "@/views/02Watch.vue";
import Lifecycle from "@/views/03Lifecycle.vue";
import Router from "@/views/04VueRouter.vue";

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
        component: () => import("@/views/01ReactiveObj.vue")
    },
    {
        path: '/watch',
        name: 'Watch',
        component: Watch
    },
    {
      path: '/lifecycle',
      name: 'Lifecycle',
      component: Lifecycle
    },
    {
        path: '/router',
        name: 'Router',
        component: Router
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
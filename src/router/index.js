import {createRouter, createWebHistory} from "vue-router";

import Home from "../views/Home.vue";
import Watch from "@/views/02Watch.vue";
import Lifecycle from "@/views/03Lifecycle.vue";
import Router from "@/views/04VueRouter.vue";
import Login from "@/components/Login.vue";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";
import User from "@/components/User.vue";

const routes = [
    {
        path: "/",
        // 重定向
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
        component: Lifecycle,
        beforeEnter: (to, from) => {
            return true;
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/router',
        name: 'Router',
        // 路由守卫
        beforeEnter: (to, from, next) => {
            console.log('单个路由守卫 to: ' + to.path);
            console.log('单个路由守卫 from: ' + from.path);

            if (from.path === '/home') {
                next();
                return
            }
            next('/home');
        },
        component: Router
    },
    {
        path: '/parent',
        name: 'Parent',
        component: Parent
    },
    {
        path: '/child',
        name: 'Child',
        component: Child
    },
    {
        path: '/user/:id',
        name: 'User',
        component: User
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 通过router对象的beforeEach(to, from, next)来注册路由全局守卫
router.beforeEach((to, from, next) => {
    console.log('全局守卫 to: ' + to.path);
    console.log('全局守卫 from: ' + from.path);

    next();
});


export default router;
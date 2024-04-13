import {createRouter, createWebHistory} from "vue-router";

import Home from "../views/Home.vue";
import Watch from "@/views/02Watch.vue";
import Lifecycle from "@/views/03Lifecycle.vue";
import Router from "@/views/04VueRouter.vue";
import Login from "@/components/Login.vue";
import Parent from "@/components/Parent.vue";
import Child from "@/components/Child.vue";
import User from "@/components/User.vue";
import Grandson from "@/components/Grandson.vue";
import ParentB from "@/components/ParentB.vue";
import ChildA from "@/components/ChildA.vue";
import ChildB from "@/components/ChildB.vue";
import ChildSlotA from "@/components/ChildSlotA.vue";
import ParentSlot from "@/components/ParentSlot.vue";
import ChildSlotB from "@/components/ChildSlotB.vue";
import TeleportParent from "@/components/TeleportParent.vue";
import TeleportChild from "@/components/TeleportChild.vue";
import DynamicComponent from "@/components/DynamicComponent.vue";
import AsyncComponent from "@/components/AsyncComponent.vue";
import VuexTest from '@/views/05VuexTest.vue';

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
        path: '/grandson',
        name: 'Grandson',
        component: Grandson
    },
    {
        path: '/user/:id',
        name: 'User',
        component: User
    },
    {
        path: '/parentB',
        name: 'ParentB',
        component: ParentB
    },
    {
        path: '/childA',
        name: 'ChildA',
        component: ChildA
    },
    {
        path: '/childB',
        name: 'ChildB',
        component: ChildB
    },
    {
        path: '/parentSlot',
        name: 'ParentSlot',
        component: ParentSlot
    },
    {
        path: '/childSlotA',
        name: 'ChildSlotA',
        component: ChildSlotA
    },
    {
        path: '/childSlotB',
        name: 'ChildSlotB',
        component: ChildSlotB
    },
    {
        path: '/teleportParent',
        name: 'TeleportParent',
        component: TeleportParent
    },
    {
        path: '/TeleportChild',
        name: 'TeleportChild',
        component: TeleportChild
    },
    {
        path: '/dynamicComponent',
        name: 'DynamicComponent',
        component: DynamicComponent
    },
    {
        path: '/asyncComponent',
        name: 'AsyncComponent',
        component: AsyncComponent
    },
    {
        path: '/vuexTest',
        name: 'VuexTest',
        component: VuexTest
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
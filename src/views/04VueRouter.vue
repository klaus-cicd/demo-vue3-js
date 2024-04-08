<template>
  <BackHome/>
  <h1>VueRouter@4</h1>
  <p>
    <!-- 使用 router-link 组件进行导航 -->
    <!-- 通过传递 `to` 来指定链接 -->
    <!-- `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 -->
    <p>直接通过URI跳转</p>
    <router-link to="/">Go to Home</router-link>
    <br/>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <!--<router-view></router-view>-->

  <!-- 使用按钮触发路由跳转 -->
  <p>通过嵌套button跳转</p>
  <router-link to="/">
    <button>Home</button>
  </router-link>
  <br/>

  <p>通过click跳转</p>
  <button @click="toHome">Home</button>

</template>
<script setup>
import BackHome from "@/components/BackHome.vue";
import {useRouter} from "vue-router";

const router = useRouter();
// 直接访问, 无需传递参数
// let toHome = () => router.push('/');
// 传递参数(路由参数获取逻辑在Home页面查看)
let toHome = () => {
  router.push({
    path: "Home",
    params: {
      id: 'router'
    }
  });
}

</script>

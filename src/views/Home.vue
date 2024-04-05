<template>
  <div>
    <p>这是Home页面</p>
  </div>
  <!-- 使用组件 -->
  <TestComponent/>
  <router-link to="/reactive">
    <button>响应式对象</button>
  </router-link>
  <router-link to="/watch">
    <button>watch监听函数</button>
  </router-link>
  <router-link to="/lifecycle">
    <button>Vue3生命周期</button>
  </router-link>
    <router-link to="/router">
    <button>VueRouter@4</button>
  </router-link>
</template>

<script setup>
// 引入其他组件
import TestComponent from "@/components/TestComponent.vue";
import RefAndReactive from "@/views/01ReactiveObj.vue";
// Vue2 选项式的语法的页面直接引入报错
// import Vue2ApiGrammar from "@/views/Vue2ApiGrammar.vue";


</script>

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

  <router-link to="/parent">Go to parent</router-link>
  <router-link to="/child">Go to child</router-link>

  <hr/>
  <div>
    <p>用户页跳转</p>
    <div>
      <p style="display: inline-block;">用户ID:&nbsp;</p>
      <input v-model="userId"/>
      <button @click="goToUserPage">跳转</button>
    </div>
  </div>

</template>

<script setup>
// 引入其他组件
import TestComponent from "@/components/TestComponent.vue";
import {useRouter} from "vue-router";
// Vue2 选项式的语法的页面直接引入报错
// import Vue2ApiGrammar from "@/views/Vue2ApiGrammar.vue";

let userId = ref();
let router = useRouter();

let goToUserPage = () => {
  console.log(userId.value)
  if (userId.value === undefined) {
    alert('请输入用户ID')
    return
  }
  // 如果需要将router对象在其他函数内使用, 一定要在外层抽取一个变量, 也就是要和import {useRouter} from "vue-router";在同一个作用域的地方抽取一个变量, 否则在内部其他函数使用时会抛出undefined的异常
  // user/{userId.value}?code={userId.value}
  router.push({
    name: 'User',
    params: {
      id: userId.value
    },
    // ?后面的参数传参
    query: {
      code: userId.value
    }
  })
}

watch(userId, (newValue) => {
  console.log(newValue)
})

</script>

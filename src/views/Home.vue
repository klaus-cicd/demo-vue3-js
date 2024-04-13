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
  <br>
  <router-link to="Parent">跳转至Parent页面</router-link>
  <br>
  <router-link to="ParentB">跳转至ParentB页面</router-link>
  <br>
  <router-link to="ParentSlot">跳转至ParentSlot页面</router-link>
  <br>
  <router-link to="TeleportParent">跳转至TeleportParent页面</router-link>
  <br>
  <router-link to="DynamicComponent">跳转至DynamicComponent页面</router-link>
  <br/>
  <router-link to="AsyncComponent">跳转至异步组件页面</router-link>
  <br/>
  <router-link to="VuexTest">跳转至Vuex页面</router-link>
  <hr/>
  <div>
    <span>用户页跳转</span>
    <div>
      <p style="display: inline-block;">用户ID:&nbsp;</p>
      <el-input v-model="userId" style="width: 240px" placeholder="Please input user id"/>
      <el-button type="primary" @click="goToUserPage">跳转</el-button>
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
    // '?'后面的参数传参
    query: {
      code: userId.value
    }
  })
}

watch(userId, (newValue) => {
  console.log(newValue)
})

</script>

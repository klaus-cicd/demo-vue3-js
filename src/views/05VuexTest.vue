<script setup>
import user from "@/store/index.js";
import BackHome from "@/components/BackHome.vue";
import {useStore} from "vuex";


// 获取state
console.log(user.state.count)
console.log(computed(() => user.state.count).value)
// name是module, 是子对象, 所以值时一个对象, 而非直接一个属性
console.log(computed(() => user.state.name).value) // -> { "name": "Klaus" }

let countAdd = () => {
  // 执行mutations内的方法
  user.commit('increment')
}

// 执行Action, 本质是通过Action去调用mutations内的方法
let action = () => {
  user.dispatch("increment")
}

</script>

<template>
  <BackHome/>
  <h1>Vuex</h1>
  count: {{ user.state.count }}

  name: {{ user.state.name }}
  <el-button @click="countAdd">Count++</el-button>
  <el-button @click="action">执行Action</el-button>
</template>
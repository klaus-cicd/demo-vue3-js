<script setup>
import BackHome from "@/components/BackHome.vue";
import {useCounterStore} from '@/stores/counter'
import {storeToRefs} from "pinia";

const counter = useCounterStore()
counter.count++
// 批量更新
counter.$patch({count: counter.count + 1,name: 'Silas'})
// 或使用 action 代替
counter.increment()
let countAdd = () => {
  counter.increment()
}

// 这样直接解构获取的count非响应式,不会跟着increment修改
// let {count} = counter
// 需要配合storeToRefs函数才能解构处响应式数据(得到的是ref对象, 所以需要使用从value属性内获取值)
let {count} = storeToRefs(counter)
console.log('count: ' + count.value)
let countAddDirect = () => {
  count.value++
}

console.log(counter.getCount)
</script>

<template>
  <BackHome/>
  <h1>Pinia页面</h1>

  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
  <div>Current name: {{ counter.name }}</div>
  <p>解构store对象: {{ count }}</p>
  <el-button @click="countAdd" type="primary">Count++</el-button>
  <el-button @click="countAddDirect" type="primary">Count++direct</el-button>
</template>

<style scoped>

</style>
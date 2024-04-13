<script setup>
import BackHome from "@/components/BackHome.vue";
import {useCounterStore} from '@/stores/counter'

const counter = useCounterStore()
counter.count++
// 自动补全！ ✨
counter.$patch({count: counter.count + 1})
// 或使用 action 代替
counter.increment()

console.log(counter.getCount)
</script>

<template>
  <BackHome/>
  <h1>Pinia页面</h1>

  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
</template>

<style scoped>

</style>
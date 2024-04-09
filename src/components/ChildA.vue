<template>
  <h1>子组件A</h1>
  <p>子组件A参数: {{ childAParam }}</p>
  <!-- 提供一个获取ChildA组件参数的事件 -->
  <el-button @click="exportChildAParam">暴露childAParam参数</el-button>
</template>

<script setup>
import emitter from "@/plugins/Bus.js";

let childAParam = ref('66666')
let exportChildAParam = () => {
  // 触发事件逻辑
  emitter.emit('exportChildAParam', childAParam)
}
</script>
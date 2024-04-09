<template>
  <h1>子组件B</h1>
  <p>从兄弟组件内获取到的值: {{ childAParam }}</p>
</template>

<script setup>
import emitter from "@/plugins/Bus.js";

let childAParam = ref('')
// 可以理解为监听指定事件
emitter.on('exportChildAParam', e => {
  // 这个e.value就是exportChildAParam事件的内容
  console.log(e);
  childAParam.value = e.value
})
</script>
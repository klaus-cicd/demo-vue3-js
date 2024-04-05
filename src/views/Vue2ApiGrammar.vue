<template>
  <div id="app">
    <div style="border: solid">
      <h1>这是Vue2选项式API页面</h1>
      <p>{{ count }}</p>
      <button @click="count++">Count++</button>
    </div>
  </div>
</template>
<script>
import vue from "@vitejs/plugin-vue";

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countAdd() {
      this.count++;
    }
  }
}

</script>
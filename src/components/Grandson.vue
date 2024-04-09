<template>
  <div style="border: solid 1px red">
    <h1>我是孙组件</h1>
    <p><span>从顶级父组件内获取到的内容: {{ provideContent }}</span></p>
    <router-link v-if="useRouter().currentRoute.value.name === 'Grandson'" to="Child">返回子组件</router-link>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

// 使用inject注入父或者爷或祖宗组件内暴露的内容
let provideContent = inject('provideContent');
console.log('孙组件内获取到的 provideContent :' + provideContent);
</script>
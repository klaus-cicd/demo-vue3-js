<script setup>

import BackHome from "@/components/BackHome.vue";
import {getHelloWorld, getTestEnum} from "@/api/getHelloWorld.js";

let helloWorldRespData = ref('')
let doHelloWorldRequest = () => {
  let map = new Map();
  map.set('a', 'aaa111')
  getHelloWorld().then(res => {
    helloWorldRespData.value = res.data
    return res.data;
  });
}

let testEnumResData = ref({})
let doTestEnumReq = () => {
  getTestEnum({testEnum: 'HOUR'}).then(res => {
    testEnumResData.value = res.data
    return res.data;
  });
}

</script>

<template>
  <BackHome/>
  <div style="border: solid 1px green;margin: 10px">
    <h1>Axios页面</h1>
  </div>

  <div style="border: solid 1px yellow;margin: 10px">
    <el-button @click="doHelloWorldRequest" type="primary">请求HelloWorld接口</el-button>
    <p v-if="helloWorldRespData">helloWorld接口响应值: {{ helloWorldRespData }}</p>

    <el-button @click="doTestEnumReq" type="primary">请求TestEnum接口</el-button>
    <p v-if="Object.keys(testEnumResData).length > 0">testEnum接口响应值: {{ testEnumResData }}</p>
  </div>
</template>

<style scoped>

</style>
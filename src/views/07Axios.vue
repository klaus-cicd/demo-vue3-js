<script setup>

import BackHome from "@/components/BackHome.vue";
import {helloWorld, testEnum} from "@/api/helloWorld.js";

helloWorld("aaa").then(res => {
  console.log(res.data);
  return res.data;
});

testEnum( {testEnum: 'HOUR'}).then(res => console.log(res.data));

</script>

<template>
  <BackHome/>
  <h1>Axios页面</h1>
</template>

<style scoped>

</style>
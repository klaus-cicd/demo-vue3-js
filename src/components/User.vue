<template>
  <BackHome/>
  <h1>User页面</h1>
  <p>Id: {{ id }}</p>
  <p>Code: {{ code }}</p>
</template>

<script setup>
import {useRoute} from "vue-router";

// 获取URL参数
let id = useRoute().params.id
let code = useRoute().query.code
</script>
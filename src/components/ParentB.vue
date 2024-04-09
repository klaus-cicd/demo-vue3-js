<template>
  <BackHome/>
  <h1>父组件B</h1>
  <ChildA/>
  <ChildB/>
</template>

<script setup>

import ChildA from "@/components/ChildA.vue";
import ChildB from "@/components/ChildB.vue";
import BackHome from "@/components/BackHome.vue";
</script>
<template>
  <BackHome/>
  <h1>Vue3生命周期</h1>
  <hr>

</template>

<script setup>
import BackHome from "@/components/BackHome.vue";

onBeforeMount(() => {
  console.log('onBeforeMount----')
})

onMounted(() => {
  console.log('onMounted--')
})
</script>
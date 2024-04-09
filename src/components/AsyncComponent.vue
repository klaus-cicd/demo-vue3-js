<template>
  <BackHome/>
  <h1>异步组件</h1>
  <Child/>
  <AsyncChildAComp/>
  <AsyncChildBComp v-if="showAsyncComponent"/>
</template>

<script setup>
import BackHome from "@/components/BackHome.vue";
import Child from "@/components/Child.vue";

const AsyncChildAComp = defineAsyncComponent(() =>
  import('../components/ChildA.vue')
)
const AsyncChildBComp = defineAsyncComponent(() =>
  import('../components/ChildB.vue')
)

let showAsyncComponent = ref(false);

</script>
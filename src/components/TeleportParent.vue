<template>
  <BackHome/>
  <div class="TeleportParent">
    <span>这是TeleportParent原本的数据, 定义了class为TeleportParent</span>
  </div>

  <div id="TeleportParent">
    <span>这是TeleportParent原本的数据, 定义了id为TeleportParent</span>
  </div>
  <br>
  <router-link to="TeleportChild">跳转至TeleportChild页面</router-link>
</template>

<script setup>

import BackHome from "@/components/BackHome.vue";
</script>
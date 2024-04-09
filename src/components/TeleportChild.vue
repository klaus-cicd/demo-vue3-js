<template>
  <teleport to="body">
    <h1>这是TeleportChild页面 Body</h1>
  </teleport>

  <teleport to=".TeleportParent">
    从TeleportChild传送出来的内容, 传送目标: class为TeleportParent
  </teleport>

  <teleport to="#TeleportParent">
    <div>
      从TeleportChild传送出来的内容, 传送目标: id为TeleportParent
    </div>
  </teleport>

  <router-link to="TeleportParent">返回父页面</router-link>

</template>

<script setup>

</script>
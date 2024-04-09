<template>
  <div style="border: solid 1px green;margin: 10px">
    <h1>ChildSlotB</h1>
    <header>
      <h2>头部</h2>
      <slot name="slotA"></slot>
    </header>

    <section>
      <h2>中间部分</h2>

      <div v-for='item in list' :key='item.id'>
        <!-- 指定作用域插槽 -->
        <slot :data="item"></slot>
      </div>


      <slot name="qwer"></slot>
    </section>

    <footer>
      <h2>底部</h2>
      <slot name="slotB"></slot>
    </footer>
  </div>
</template>
<script setup>
let list = reactive([
  {id: 1, name: '张三', age: 18},
  {id: 2, name: '李四', age: 16},
  {id: 3, name: '王五', age: 25},
])
</script>
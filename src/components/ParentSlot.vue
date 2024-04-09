<template>
  <BackHome/>
  <div style="border: solid 2px red">
    <h1>插槽父组件</h1>
    <el-input v-model="xxx" placeholder="动态插槽名称(输入qwer时会展示)" style="width: 93%"></el-input>

    <ChildSlotA>
      这是一个来自ParentSlot的匿名插槽
    </ChildSlotA>


    <ChildSlotB>
      <!-- v-slot:slotA 可以简写为#slotA -->
      <template v-slot:slotA>
        来自ParentSlot的具名插槽A
      </template>

      <template #slotB>
        来自ParentSlot的具名插槽B
      </template>

      <!-- 作用域插槽: 数据内容在子组件内自行定义, v-slot='{data}' 可以简写为#default='{data}'-->
      <template v-slot='{data}'>
        {{ data.name }}
      </template>

      <!-- 动态插槽-->
      <template #[xxx]>
        来自ParentSlot的动态插槽
      </template>
    </ChildSlotB>
  </div>
</template>
<script setup>
import ChildSlotA from "@/components/ChildSlotA.vue";
import ChildSlotB from "@/components/ChildSlotB.vue";
import BackHome from "@/components/BackHome.vue";

let xxx = ref()
</script>
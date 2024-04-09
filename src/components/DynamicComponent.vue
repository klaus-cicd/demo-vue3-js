<template>
  <BackHome/>
  <div>
    <ul>
      <li v-for="(item, index) in tabList" :key="index" @click="changeTab(index)">
        <el-button :type="item.id === currentTab.id ? 'success' : 'primary'">
          {{ item.name }}
        </el-button>
      </li>
    </ul>
  </div>

  <!-- 动态组件: https://cn.vuejs.org/guide/essentials/component-basics.html#dynamic-components -->

  <keep-alive>
    <component :is="currentTab.component"></component>
  </keep-alive>

</template>

<script setup>
// 先定义好所有需要展示组件列表
import BackHome from "@/components/BackHome.vue";
import Child from "@/components/Child.vue";
import ChildA from "@/components/ChildA.vue";
import ChildB from "@/components/ChildB.vue";

let tabList = reactive([
  //  组件对象不需要响应式, 所以使用 markRaw()把组件对象标记为非响应式
  {id: 1, name: '这是第一个Tab', component: markRaw(Child)},
  {id: 2, name: '这是第二个Tab', component: markRaw(ChildA)},
  {id: 3, name: '这是第三个Tab', component: markRaw(ChildB)}
])

// 默认是第一个组件
let currentTab = reactive(tabList[0])

let changeTab = (index) => {
  currentTab = tabList[index]
  console.log(currentTab)
}

</script>
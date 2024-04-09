<template>
  <div style="border: solid 1px green">
    <BackHome/>
    <h1 style="color: green">我是父组件</h1>
    <p>name :{{ name}}</p>
    <el-input v-model="msg" placeholder="请输入希望传入子组件的内容"/>
    <!-- 传递参数 msg 到Child组件(子组件不可修改); 传递双向绑定的参数name, 父子组件都可以随意修改; 两种传递的获取方式一样-->
    <Child :msg="msg" v-model:name="name" @clickChild="clickEven"></Child>
    <router-link to="/child">Go to child</router-link>
    <br/>
    <span v-if="childParam !== undefined">父从子组件获取的参数: {{ childParam }}</span>
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import BackHome from "@/components/BackHome.vue";
// 要传递到子组件的内容, 不支持隔代, 如有需隔代需要不停的嵌套传入
let msg = ref();

// 提供给双向绑定的参数给子组件
let name = ref('Klaus');

// 使用provide暴露给子孙组件, 可以隔代
provide('provideContent', '__父组件使用provide传递给子组件的内容__')

// 从子组件事件内获取到的内容
let childParam = ref()
let clickEven = (val) => {
  let jsonVal = JSON.stringify(val);
  console.log('从子组件内获取的参数值: ' + jsonVal);
  childParam.value = val
}

</script>
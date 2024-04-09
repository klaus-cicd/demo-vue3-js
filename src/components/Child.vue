<template>
  <div style="border: solid 1px blue">
    <h1 style="color: blue;">我是子组件</h1>
    <h2><span style="color: blue;">子组件内容</span></h2>
    <p><span>从父组件获取到的msg: {{ msg }}</span></p>
    <p><span>从父组件获取到的name: {{ name }}</span></p>
    <el-button @click="changeParentName">修改父组件Name值</el-button>
    <br/>
    <span>从父组件获取到的provideContent: {{ provideContent }}</span>
    <br>
    <!-- 限制为路由在当前页面时才展示 -->
    <router-link v-if="router.currentRoute.value.name === 'Child'" to="Parent">返回父组件</router-link>
    <br>
    <el-button @click="clickChild" type="primary">触发子组件传参事件</el-button>
    <p><span>要传递给父组件的内容: {{ childParam }}</span></p>

    <Grandson/>
    <router-link to="Grandson">跳转至孙组件</router-link>
  </div>
</template>

<script setup>
import router from "@/router/index.js";
import Grandson from "@/components/Grandson.vue";

// 从父组件获取传递的参数
let props = defineProps({
  msg: {
    type: String,
    default: '默认值'
  },
  name: {
    type: String,
    default: ""
  }
});

// 如果不需要默认值, 直接提供类型即可
// let props = defineProps({
//   msg: String,
//   name: String
// });

console.log(props.msg);
console.log(props.name);

// setup语法: 使用defineEmits创建事件，接受一个数组, 数组内是事件名称
// 子组件要修改父组件传递的双向绑定的数据时, 需要使用update事件进行修改(这里由于在同一个页面内只能定义一次defineEmits, 所以需要把['update:name', 'clickChild']放在一起定义, 'clickChild'事件是给后面的代码用的)
let childParamEmit = defineEmits(['update:name', 'clickChild']);
let changeParentName = () => {
  childParamEmit('update:name', 'Silas');
}


// 使用inject注入父或者爷或祖宗组件内暴露的内容
let provideContent = inject('provideContent');


// 子 -> 父 传参
let childParam = reactive({
  name: 'Klaus',
  age: 18
});

let clickChild = () => {
  // 触发事件(事件名称, 事件内容)
  childParamEmit('clickChild', childParam)
};
</script>
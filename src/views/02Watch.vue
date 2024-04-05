<template>
  <BackHome/>
  <h1>watch监听函数</h1>
  <p>监听数据变化</p>
  <hr/>

  <p>count: {{ count }}</p>
  <p>countB: {{ countB }}</p>
  <button @click="countAdd">countAdd</button>
  <button @click="countReduce">countReduce</button>

  <p>obj: {{ obj }}</p>
  <button @click="ageAdd">ageAdd</button>
</template>

<script setup>
import BackHome from "@/components/BackHome.vue";
import {useRouter} from "vue-router";

let count = ref(1);

let countAdd = () => {
  count.value++
}
// 监听某一个数值
watch(count, (newValue, oldValue) => {
  console.log('watch count, change. oldValue: ' + oldValue);
  console.log('watch count, change. newValue: ' + newValue);
})
let countB = ref(100);
let countReduce = () => {
  countB.value--;
}
// 监听多个数值, newValue和oldValue是数组, newValue[0] => countNewValue, newValue[1] => countBNewValue
watch([count, countB], (newValue, oldValue) => {
  console.log('watch multiple count, change. Count oldValue: ' + oldValue[0] + ', countB oldValue:' + oldValue[1]);
  console.log('watch multiple count, change. newValue: ' + newValue);
})

let obj = reactive({name: '张三', age: 18});
let ageAdd = () => {
  obj.age++;
}
// 监听引用类型对象时, 由于即使对象发生修改, 它的内存地址不变, 所以无法获取到旧值
watch(obj, newValue => {
  console.log('watch count, change. newValue: ' + newValue.age);
})

// 添加参数 immediate: true, 初始化时就监听
watch(obj, newValue => {
  console.log('watch count, change. newValue: ' + newValue.age);
}, {
  immediate: true
})

// 监听引用对象的某一个属性, 可以正常获取到旧值
watch(() => obj.age, (newValue, oldValue) => {
  console.log('watch obj.age, change. oldValue: ' + oldValue);
  console.log('watch obj.age, change. newValue: ' + newValue);
}, {
  // 如果监听的属性也是引用类型, 需要开启深度监听
  deep: true
})

// 立即执行监听(有点类似设置初始化时监听)
watchEffect(() => {
  console.log(obj)
})

// 监听路由
watch(useRouter().currentRoute.value, newVal => {
  console.log('watch current route: ' + newVal)
})
</script>
<template>
  <div style="border: solid">
    <h1>响应式对象获取&修改</h1>
    <hr/>
    <p>count: {{ count }}</p>
    <!-- 当解构的对象直接在html代码内使用时，自带.value -->
    <button @click="count++">count++</button>
    <button @click="countAdd">countAdd</button>

    <p>obj: {{ obj }}</p>
    <button @click="showReactiveObj">showReactiveObj</button>
    <button @click="objAgeAdd">objAgeAdd</button>

    <p>reactiveInt: {{ reactiveInt }}</p>
    <button @click="addReactiveInt">showReactiveInt(错误演示)</button>

    <hr/>
    <h1>ES6解构</h1>
    <p>name: {{ name }} </p>
    <button @click="testEs6ObjName">testEs6ObjName</button>

    <h1>toRefs: 解构对象</h1>
    <p>toRefsObj: {{ toRefsObj }}</p>
    <button @click="testToRefs">testToRefs</button>

    <h1>toRef: 提取响应式属性</h1>
    <p>toRefName: {{ toRefName }}</p>
    <button @click="changeToRefName">changeToRefName: 赵六</button>

    <h1>toRaw: 深拷贝出一个普通对象</h1>
    <p>objToRaw: {{ objToRaw }}</p>
    <button @click="objToRawAgeAdd">objToRawAgeAdd</button>
  </div>
</template>

<!-- 组合式（可以理解为将数据、对应的method等相关的信息可以放在一起，而之前选项式中，数据必须放在data，method必须放在methods内，如果代码量非常大，需要不停的翻页才能找到对应的数据或方法） -->
<script setup>
// 因为使用了自动导入插件unplugin-auto-import，所以可以不用显式的导入
// import {ref, reactive} from "vue";

// 这样声明的对象，在vue3内只是一个死数据，可以用于展示，如果需要对其操作，需要进行解构
// let count = 0;
// 对数据进行使用ref后，才是响应式对象，类型为RefImpl, 对其值进行操作时需要对其value属性操作
// 入参可以是任意值
let count = ref(0);

let countAdd = () => {
  console.log(count)
  // 在script内，如果要get或set ref解构的对象，需要对其value属性进行操作，而非对象
  console.log(count.value)
  count.value++;
}

// 使用reactive，对象类型为 Proxy(Object) 代理对象，因为是代理对象，没有额外再包一层，所以不需要想ref一样对其value属性操作，而是可以直接操作
// 但是reactive的入参必须是Object，也就是必须是引用类型对象，而基本类型对象是不可以的
let obj = reactive({
  name: '张三',
  age: 18
})

let showReactiveObj = () => {
  console.log(obj)
  // 使用reactive解构的对象获取到的代理对象，可以直接对代理对象对应的属性进行操作，而不需要操作value属性
  console.log('name:' + obj.name + ',' + 'age:' + obj.age)
}

let objAgeAdd = () => {
  obj.name = '李四'
  obj.age++;
}


// 错误示范，使用reactive解构基本类型，虽然不会报错，但是会有告警
let reactiveInt = reactive(1);
let addReactiveInt = () => {
  // 这里修改后不会影响{{ reactiveInt }}
  reactiveInt++
  console.log(reactiveInt)
}


// 使用ES6的解构语法(深拷贝)
let {name} = reactive(obj)
let testEs6ObjName = () => {
  // 修改解构后的属性值, 不会影响原响应式对象值, 修改原响应式对象值也不会修改解构后的值 -> 属于深拷贝
  // 但是它是普通对象, 如果需要{{name}}跟着变化, 还是需要将name变成响应式
  name = 'ES6解构name'
  console.log(name);
}


// 使用toRefs对对象进行解构为普通对象, 这时候操作toRefObj或obj的值会互相影响(浅拷贝), 对象类型是一个Object对象, 所有属性都是ObjectRefImpl对象
let toRefsObj = toRefs(obj);
let testToRefs = () => {
  console.log(toRefsObj.name)
  // 会影响原obj
  toRefsObj.name.value = '王五';
  console.log(toRefsObj.name.value)
}

// 提取响应式对象内的某个属性(obj必须是响应式对象)
let toRefName = toRef(obj, 'name')
let changeToRefName = () => {
  // 浅拷贝, 和原obj.name会互相影响
  toRefName.value = '赵六';
}

// 解构响应式对象为普通对象用, 互不影响, 无响应式
let objToRaw = toRaw(obj);
let objToRawAgeAdd = () => {
  objToRaw.age++;
  console.log('objToRaw: ' + objToRaw.age);
}
</script>
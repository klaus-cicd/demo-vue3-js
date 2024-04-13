import {createStore} from 'vuex'


const moduleName = {
    state: () => ({
        name: 'Klaus'
    }),
    mutations: {
        changeName(state, name) {
            state.name = name
        }
    },
    actions: {
        changeName({commit}, payload) {
            commit('changeName', payload)
        }
    }
}


const moduleAge = {
    state: () => ({
        age: 18
    }),
    mutations: {
        addAge(state) {
            state.age += 1
        }
    }
}


// 创建一个新的 stores 实例
const user = createStore({
    state() {
        return {
            count: 0
        }
    },
    // 相当于set?
    mutations: {
        increment(state) {
            state.count++
        }
    },
    // https://vuex.vuejs.org/zh/guide/actions.html
    // Action 类似于 mutation，不同在于：
    //  1. "Action 提交的是 mutation，而不是直接变更状态"
    //  2. "Action 可以包含任意异步操作"
    actions: {
        increment({commit}, payload) {
            commit('increment', payload)
        }
    },
    // 其实就是嵌套的子对象, 作为该对象的属性
    modules: {
        name: moduleName,
        age: moduleAge
    }
})

export default user



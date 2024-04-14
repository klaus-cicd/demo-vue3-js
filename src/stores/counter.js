import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {count: 0, name: 'klaus'}
    },
    // 也可以这样定义
    // state: () => ({ count: 0 })

    // 有缓存, 如果其余地方没有对其进行修改(get方法内的修改不算), 则不会执行get内的方法, 而是直接拿缓存值
    getters: {
        getCount(state) {
            return state.count
        }
    },

    // 支持异步
    actions: {
        increment() {
            this.count++
        },
    },

    // 开启持久化
    persist: {
        enabled: true,
        // 持久化策略, 没有配置的话默认是Session, 也就是页面重新开启就没了
        strategies: [
            {
                // key可自定义, 为当前store整体取一个唯一的名称, 会作为存储至localStorage的key
                key: 'counter',
                storage: 'localStorage',
                // 配置该store内需要持久化的字段
                path: ['count']
            }
        ]
    }
})
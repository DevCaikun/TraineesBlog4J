---
sidebar_position: 8
---

# Pinia

Pinia 是一个 Vuex 的替代品，它是 Vue 3 的官方状态管理库。相比于 Vuex，Pinia 提供了更好的类型支持和更简洁的 API。

在 Pinia 中，我们可以通过定义一个 store 来管理应用的状态。一个 store 包括了 state、mutations、actions、getters 等等。

state：存储应用的状态数据。
actions：处理异步操作，可以触发 mutations 修改 state。
mutations：修改 state 中的数据。
getters：获取 state 中的数据，并根据需要进行计算和转换。

```JavaScript
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
});

//在上面的示例中，我们定义了一个名为 counter 的 store，它包含了一个名为 count 的状态属性和一个名为 increment 的异步操作。increment 操作会在调用时将 count 属性加一。

//使用该 store：

import { useCounterStore } from './store'

// 获取 store 实例
const counterStore = useCounterStore()
// 获取 count 属性
console.log(counterStore.count) // 0
// 调用 increment 操作
counterStore.increment()
// 输出修改后的 count 属性
console.log(counterStore.count) // 1
```




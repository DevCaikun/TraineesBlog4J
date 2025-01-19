---
sidebar_position: -2
---

# Vue 2

### 深度作用选择器

``` html
在 Vue2.js 中，>>> 和 v-deep 是等效的，用于实现深度选择器。它们都可以用来穿透组件的样式作用域，直接作用于子组件及其后代元素。
例如，假设我们有以下的组件层次结构：
<template>
  <div class="parent">
    <child-component></child-component>
  </div>
</template>

<style scoped>
.parent >>> .child-component {
  /* 对子组件应用样式 */
}
</style>

使用 >>> 或 v-deep 选择器可以让样式规则忽略组件作用域限制，直接作用于名为 .child-component 的子组件。
需要注意的是，在 Vue.js 3.x 中，>>> 被废弃了，推荐使用 ::v-deep 或 /deep/ 来代替。所以，如果你使用的是 Vue.js 3.x，建议使用 ::v-deep 或 /deep/ 代替 >>>。

总结：>>> 和 v-deep 是等效的，都可以用于在 Vue2.js 中实现深度选择器，穿透组件的样式作用域。在 Vue.js 3.x 中，建议使用 ::v-deep 或 /deep/ 来取代 >>>。
```




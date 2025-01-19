---
sidebar_position: 5
---

# ElementPlus

### 图标的用法

```vue

// 下载

npm install @element-plus/icons-vue


// main.ts

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//利用createApp方法传入根组件创建应用实例,并将应用实例挂载到#app
const app = createApp(App);
//注册插件
app.use(ElementPlus);
//挂载Vue实例到index.html的id为app的元素上面
app.mount('#app');


//组件

<script setup>
// 局部引入注册 Edit和Search 这两个 svg组件
import { Edit , Search , InfoFilled, User } from '@element-plus/icons-vue'
</script>
<template>
  <div>
      <!--使用Edit这个图标组件-->
      <edit></edit>
      <Search></Search>
      <!--推荐这种方式,图标不会大到满屏-->
      <el-icon><InfoFilled></InfoFilled></el-icon>
      <el-button class="button" type="success" :icon="User" >添加就诊人</el-button>
  </div>
</template>

或官网
```








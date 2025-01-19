---
sidebar_position: 11
---

# Tsparticles粒子特效
NPM地址及教程: https://www.npmjs.com/package/@tsparticles/vue3

### 应用示例

#### package.json

```json
"dependencies": {
    "tsparticles": "^3.0.3", //完整包
    "tsparticles-engine": "^2.12.0", //核心包
    "tsparticles-slim": "^2.12.0", //迷你版
},
```

#### main.ts

```typescript
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";.
// import { loadSlim } from "@tsparticles/slim";

//利用createApp方法传入根组件创建应用实例,并将应用实例挂载到#app
const app = createApp(App);

app.use(Particles, {init: async engine => {await loadFull(engine)}});

//挂载Vue实例到index.html的id为app的元素上面
app.mount('#app');

```

#### App.vue

```vue
<template>
  <!--粒子特效-->
  <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="options"/>
  <div id="appClass">
      <!--  登录组件  -->
      <Login></Login>
      <!--展示路由展示出口-->
      <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

import {reactive} from "vue";
declare module "@tsparticles/vue3";
const particlesLoaded = async (container:any) => {
  console.log("Particles container loaded", container);
};
const options = reactive({
  background: {
    color: {
      value: '#0d47a1' // 背景颜色
    }
  },
  fullScreen: {
    enable: true, // 启用全屏模式，将画布填充整个屏幕，默认为启用
    zIndex: -1, // 全屏模式下的 z-index 值，默认为 0
  },
  fpsLimit: 120, // 粒子效果的帧率限制
  interactivity: {
    events: {
      onClick: {
        enable: true, // 启用点击事件
        mode: 'push' // 点击时的效果模式为 "push"
      },
      onHover: {
        enable: true, // 启用悬停事件
        mode: "grab", // 鼠标悬停时的效果模式为 "grab"，可选值还有 "repulse" 和 "grab"
        number: 20, // 悬停时吸引的粒子数量
      },
      onMove: {
        enable: true, // 启用鼠标滑动事件
        mode: "grab", // 鼠标滑动时的效果模式为 "grab"
      },
    },
    modes: {
      bubble: {
        distance: 400, // 气泡效果的距离
        duration: 2, // 气泡效果的持续时间
        opacity: 0.8, // 气泡效果的透明度
        size: 40 // 气泡效果的大小
      },
      push: {
        quantity: 4 // 点击时的粒子数量
      },
      repulse: {
        distance: 200, // 反弹效果的距离
        duration: 0.4 // 反弹效果的持续时间
      },
      grab: {
        distance: 300, // 吸引效果的距离
        lineLinked: {
          opacity: 0.7, // 连接线的透明度
        },
      },
    }
  },
  particles: {
    color: {
      value: '#ffffff' // 粒子的颜色
    },
    links: {
      color: '#ffffff', // 连接线的颜色
      distance: 150, // 连接线的距离
      enable: true, // 启用连接线
      opacity: 0.5, // 连接线的透明度
      width: 1 // 连接线的宽度
    },
    move: {
      direction: 'none', // 粒子移动的方向
      enable: true, // 启用粒子移动
      outModes: 'bounce', // 粒子移出画布后的行为，默认为反弹
      random: false, // 粒子是否随机移动
      speed: { min: 0.5, max: 1 }, // 粒子的移动速度范围
      straight: false // 粒子是否直线移动
    },
    number: {
      density: {
        enable: true, // 启用粒子的密度
      },
      value: 80 // 粒子的数量
    },
    opacity: {
      value: 0.5 // 粒子的透明度
    },
    shape: {
      type: 'circle' // 粒子的形状，默认为圆形
    },
    size: {
      value: {min: 1, max: 5} // 粒子的大小范围
    }
  },
  detectRetina: true // 是否检测 Retina 屏幕
});
</script>

<style scoped lang="scss">
*{
  //将元素内容的内边距和边框宽度和高度包括在内边距和边框内部，从而避免了内容溢出视口
  box-sizing: border-box;
  //隐藏溢出的内容，而不改变盒子的大小
  //overflow: hidden;
}
:deep(*) {
  box-sizing: border-box;
  //overflow: hidden;
}
</style>

```


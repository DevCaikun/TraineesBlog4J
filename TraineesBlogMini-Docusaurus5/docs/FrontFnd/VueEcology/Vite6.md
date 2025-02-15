---
sidebar_position: 3
---

# Vite 6

### src路径配置为@别名

#### 安装必要依赖  

```shell
npm install @types/node --save-dev
```

#### vite.config.ts

```typescript

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需要引入 path 模块

export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // 配置 @ 别名指向 src 目录
        }
    },
})

```

#### tsconfig.app.json

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    
    // 其他配置...
    
    /*src文件夹别名*/
    "baseUrl": "./", // 基础路径
    "paths": {
      "@/*": [
        "src/*", // 配置路径映射
      ],
    },

  },
}

```

### ts不识别.vue后缀

#### vite-env.d.ts

```typescript
/// <reference types="vite/client" />

//vite使用的是ts，ts不识别.vue 后缀的文件 的解决办法
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
const component: DefineComponent<{}, {}, any>
export default component
}
```

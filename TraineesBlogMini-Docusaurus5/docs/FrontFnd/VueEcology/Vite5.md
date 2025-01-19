---
sidebar_position: 3
---

# Vite 5

### 配置资源路径别名

#### vite.config.ts

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入node提供的内置模块path:可以获取绝对路径,需要安装 "@types/node": "^20.11.10",
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //src文件夹配置别名
    alias: {
      // 将 @ key 设置为用nodejs相关路径拼接方法得到src的绝对路径字符串
      // 主要影响 Vite 打包过程
      "@": path.resolve(__dirname, 'src'),
    },
      //或
      // 定义一个别名 '@'，该别名对应于当前 JavaScript 模块文件所在目录下的 'src' 目录的绝对文件路径。
      //'@': fileURLToPath(new URL('./src', import.meta.url))
  },
  server: {
    port: 1856,//自定义本地启动端口
    proxy: {//配置代理跨域
      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'https://www.trainees.cn',
        changeOrigin: true,
      },
    }
  }
});

```

#### vite-env.d.ts

```typescript
/// <reference types="vite/client" />

//vite使用的是ts，ts不识别.vue 后缀的文件 的解决办法
declare module "*.vue" {
    import { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>;
    export default component
}

```

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    //"jsx": "script-setup",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    // 设置类型声明文件的根目录
    "typeRoots": ["./node_modules/@types", "./src/types"],
    // 指定要包含的类型声明文件
    "types": ["webpack-env", "jest", "@vue/runtime-core","node"],
      
      
    //让IDE可以进行路径智能提示,不配置此项 配置vite.config.ts的src文件夹配置别名不会生效
    "baseUrl": "../mini",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
      
      
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```


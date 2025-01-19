---
sidebar_position: 8
---

# Ionicons

官网: https://ionic.io/ionicons

相关博客: http://bbs.itying.com/topic/5ff7b8816ede880234bdf271

### use1

```vue
1.将以下<script>放置在页面末尾，就在结束</body>标记之前，以启用它们
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
例如:
<!doctype html>
    <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <!-ionicons-->
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"/>
          <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>WebFMI</title>
      </head>
      <body>
        <div id="app" style="margin: 0px;padding: 0px"></div>
      </body>
</html>

2.在ionicons图标组件中填充name属性
<ion-icon name="heart"></ion-icon>
例如:
<ion-icon name="home-outline"></ion-icon>
```

### use2

```vue
1.在Vue项目中安装
npm i ionicons
npm install @ionic/vue@latest

2.在main.ts引入并注册插件
import { IonicVue } from '@ionic/vue';
app.use(IonicVue);

3.在需要使用的组件中导入
import { star, add} from "ionicons/icons";

4.在template中使用
<ion-icon :icon="star" slot="end" />
<ion-icon :icon="star" color="primary" size="large"/>
<ion-icon :icon="star" slot="start"/>
<ion-icon :icon="add" slot="icon-only"/>

注:这种方式会报警告 [Vue warn]: Failed to resolve component: ion-icon
原因:首先看一下警告内容，这个警告的意思是 Vue.js 无法找到名为 “iconpark-icon” 的组件。可能造成这个问题的原因是组件没有被正确地注册或者导入。
解决办法:只要告诉 Vue， “iconpark-icon” 是什么或者让其忽略这个检查即可。在 vite.config.ts 的 export default defineConfig()配置对象中添加以下代码:
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('ion-icon')
      }
    }
  }),],
}
成考文章:https://blog.csdn.net/m0_53808238/article/details/134829672
```


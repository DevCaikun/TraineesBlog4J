---
sidebar_position: 3
---

# SCSS

### 全局引入

```scss
// 1. 
import "./StationScreen.scss"
import "@/components/StationScreen.scss"

```

### CSS Modules

CSS Modules 是一种在 React 项目中管理样式的技术，它可以帮助实现样式的模块化和作用域隔离。使用 CSS Modules 可以让每个组件的样式都处于独立的命名空间中，避免全局样式污染和命名冲突。在使用 CSS Modules 时，通常会将 CSS 文件以 `.module.css` 的格式命名，例如 `styles.module.css`。这样的文件将被视为 CSS Modules 文件，其中定义的类名会自动进行局部作用域处理.

模块化引入的命名会加上.module,只有在文件名以 .module.css 结尾时，才会被视为 CSS Modules 文件，并且才能发挥 CSS Modules 的作用.

```tsx
// 模块化引入
import SSStyle2 from "@/components/StationScreen.module.scss"; 

// 注: webpack项目中根目录react-app-env.d.ts文件需要有如下配置
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
```

### CSS-in-JS

CSS-in-JS 是一种在 React 应用中管理样式的方法，它将 CSS 样式直接写入 JavaScript 文件中，实现了组件级别的样式化和作用域隔离。通过 CSS-in-JS 库，开发者可以利用 JavaScript 的能力来动态生成样式，实现更灵活和强大的样式管理方式.

这些 CSS-in-JS 库都提供了不同的特性和语法，开发者可以根据项目需求选择最适合的库来管理样式，它们通常能够帮助提高代码的可维护性、可读性和灵活性，同时实现样式的作用域隔禽和重用.

1.**Styled Components**：Styled Components 是一个功能强大且易于使用的 CSS-in-JS 库，它允许你在 React 组件中编写 CSS 样式，并且支持嵌套、动态样式和全局样式等特性.

```tsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'green'};
  color: white;
`;

// 在组件中使用
<Button primary>Primary Button</Button>
```

2.**Emotion**：Emotion 是另一个流行的 CSS-in-JS 库，它提供了类似于 Styled Components 的 API，并且支持提取样式、媒体查询、组合样式等功能.

```tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyles = css`
  background-color: blue;
  color: white;
`;

// 在组件中使用
<button css={buttonStyles}>Click me</button>
```

3.**Radium**：Radium 是一个支持内联样式、伪类处理和媒体查询的 CSS-in-JS 库，适用于需要更细粒度控制的场景.

```tsx
import Radium from 'radium';

const styles = {
  base: {
    background: 'blue',
    color: 'white'
  }
};

// 在组件中使用
const MyComponent = () => (
  <div style={[styles.base, { fontSize: '16px' }]}>Hello, Radium!</div>
);

export default Radium(MyComponent);
```







#### **深度选择器**

Vue3项目中 style scope lang="ts"时,由于使用了scope 声明局部作用域,
当temple标签内部再有组件时,其组件内部的样式无法直接被作用到,需得使用深度选择器进行穿透.

```vue
/* 在 SCSS 中使用 深度选择器 时，需要注意一些语法上的变化。*/

/* Vue3 用 :deep 来表示 Vue3也是最常用和最好理解的
 .child 选择器将样式应用于 child-component 中类名为 .child 的元素。*/
<template>
  <div class="parent">
    <child-component class="child"></child-component>
  </div>
</template>
<style lang="scss" scoped>
  .parent {
    :deep(.child){
      color: red;
    }
  }
</style>

/* Vue2 在 SCSS 中 ::v-deep 表示 
 .child 选择器将样式应用于 child-component 中类名为 .child 的元素。 */
<style scoped lang="scss">
.login_container {
  ::v-deep(.el-dialog_body) {
    border-top: 1px solid red;
  }
}
</style>

/* Vue2 在 SCSS 中 /deep/ 同样可以表示 
 .child 选择器将样式应用于 child-component 中类名为 .child 的元素。 */
<template>
  <div class="parent">
    <child-component class="child"></child-component>
  </div>
</template>
<style lang="scss" scoped>
  .parent {
    /deep/ .child {
      color: red;
    }
  }
</style>

/* Vue2 在 SCSS 中 >>> 也可以用来表示深度选择器   */
<template>
  <div class="parent">
    <child-component class="child"></child-component>
  </div>
</template>
<style lang="scss" scoped>
  .parent {
    >>> .child {
      color: red;
    }
  }
</style>



/*
无论是使用 :deep 还是 >>> 或 ::v-deep 或 /deep/ ，它们的作用是相同的，都可以让你在 SCSS 中修改子组件中的样式。
记得在 Vue 组件的 style 标签中声明 scoped 属性，以限制样式的作用域。

需要注意的是 在Vue3中推荐使用 :deep , Vue2中推荐使用 >>> 或 ::v-deep 或 /deep/, Vue2中的选择器在Vue3中是已经被弃用了的，在开发中应该尽可能的避免使用深度作用选择器，而尽可能通过 props 或全局样式来实现组件样式的定制化。
*/
```

#### 常见问题

```text
1.子元素上下margin不以父元素为参照 父元素设置了margin: 0px;

1.1.原因是:当一个元素具有 margin 属性时，它的 margin 可以与其相邻元素的 margin 合并（也称为折叠）。合并后的 margin 会应用于父元素或者相邻元素，从而影响到它们的间距。

1.2合并 margin 的条件是：
父元素和子元素之间没有 padding、border 或清除浮动等间隔性的干扰。
父元素和子元素都具有垂直方向上的 margin（例如上下 margin）。

1.3.常见的合并场景：
相邻兄弟元素的上下 margin 会合并。合并后的 margin 取两个 margin 中的较大值。
父元素的上下 margin 和第一个/最后一个子元素的上下 margin 会合并。合并后的 margin 取两个 margin 中的较大值。

1.4.例如，考虑以下结构：
html
<div class="parent">
  <div class="child">Child 1</div>
  <div class="child">Child 2</div>
</div>
css
.child {
  margin-top: 20px;
  margin-bottom: 30px;
}
.parent {
  background-color: lightgray;
  padding: 10px;
}
在上述示例中，两个子元素 .child 的 margin-top 和 margin-bottom 分别为 20px 和 30px。由于父元素 .parent 具有 padding，它不会发生与子元素之间的 margin 合并。
如果去掉父元素的 padding：
css
.parent {
  background-color: lightgray;
}
这时父元素 .parent 的上下 margin 会与第一个子元素 .child 的上下 margin 合并，合并后的 margin 取较大值（30px）：
.child {
  margin-top: 30px;
  margin-bottom: 30px;
}
这就是为什么当你会观察到 margin 看起来影响了父元素的原因。
注意，合并 margin 的行为是 CSS 相关规范中定义的，并不是事件冒泡。

1.5.要防止 margin 的合并，您可以使用以下方法之一：
使用 border 或 padding：在父元素中添加 border 或 padding 可以防止父元素的 margin 与子元素的 margin 合并。
css
.parent {
  padding: 1px; /* 添加一个小的 padding */
}
或者
css
.parent {
  border: 1px solid transparent; /* 添加一个透明的边框 */
}
使用 overflow 属性：将父元素的 overflow 属性设置为非 visible 值也可以防止 margin 合并。
css
.parent {
  overflow: auto; /* 或者使用 hidden、scroll 等值 */
}
这些方法会干扰 margin 的合并行为，从而使父元素的 margin 不会受到子元素 margin 的影响。选择其中一个方法就可以有效地防止 margin 合并。
```



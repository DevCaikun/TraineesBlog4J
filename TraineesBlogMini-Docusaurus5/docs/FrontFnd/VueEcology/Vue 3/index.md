---
sidebar_position: -3
---

# Vue 3

### Options API

`TIP1:`  选项式API中,有两种常见的方式来导出组件：使用 `export default {}` 和 `export default defineComponent({})`,这两种方式在功能上是等效的，但在语法上有些差别.

`TIP2:`  选项式API为Vue2的用法,虽然 Vue3 也支持在选项式 API 中使用并支持TypeScript，但官方更推荐使用组合式 API,因为它提供了更简单、高效和可靠的类型推导.

`TIP3:` 选项式API的配置项Vue3和Vue2的生命周期不同所有配置项也有所不同.

#### export default {}
```vue
<template>
  <div>
   我好帅!
  </div>
</template>

<script>
import userTool from "@/uitils/UserToolClass"; //引入其他依赖或插件
export default {
  name: "componentName" //组件名
  components: { //声明子组件
    MyComponent,
  },
  props: { //定义父组件传递过来的数据格式,也可用数组形式 props:["property","method"],
    disabled: {
    typeof: Boolean,
       default: false
    }
  },
   methods: { //方法
     increment() {
       this.count++;
     }
   },
   data() { //数据
    return {
      count: this.initialCount
    };
   },
  computed: { 
    doubleCount() {
      return this.count * 2;
    }
  },
  watch: { //监听数据的变化，并进行相应的操作
    count(newCount, oldCount) {
      console.log(`计数变化，新值为 ${newCount}，旧值为 ${oldCount}`);
    }
  },
  onMounted() { //定义计算属性，这些属性的值会根据依赖变化而变化
    console.log('组件已挂载到 DOM');
  }
}
</script>

<style scoped lang="scss">

</style>
```
### Composition API

`TIP1:`  组合式API有两种主要写法,

#### export default defineComponent(\{\})
#### 

```vue
<template>
    <div>
   我好帅!
  </div>
</template>

<script>
import { defineComponent } from 'vue'; //默认需要导入
import userTool from "@/uitils/UserToolClass"; //引入其他依赖或插件
export default defineComponent({
  components: { //定义子组件
    ChildComponent,
  },
  props: { //定义父组件传递过来的数据格式,也可用数组形式 props:["property","method"],
    disabled: {
    typeof: Boolean,
       default: false
    }
  },
  emits: ['incremented'],
  setup(props, { emit }) { //可接 context 和props
    const increment = () => {
      emit('incremented');
    };
    let a = "bl";
    return {
      increment,
      a,
    };
  },
});
</script>

<style scoped lang="scss" >
/* 样式 */
</style>
```

#### `<script setup>`语法糖写法
#### 

`TIP1:`  在 Vue 3 的 `<script setup>` 中，之前
```vue
export default defineComponent({

  	setup(props, context) {}
});
```

中的 `context` 对象和``context`部分被拆分成如下:

props部分变为了:
```vue
defineProps({

    message: String,
});
```


context对象的:

- `attrs`：包含组件传递的所有非 props 属性。
- `slots`：包含所有插槽内容。
- `emit`：用于触发组件的自定义事件(导入的时候用 )。
- `expose`：暴露一些内部变量和方法给父组件。

部分则拆分成了多个对象:

- `defineProps`：用于定义组件接收的props属性。通过这个函数定义的props可以在模板中直接使用，而不需要通过`props`选项来声明.
-

```vue
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  count: {
    type: Number,
    default: 0
  }
});
</script>
```

- `defineSlots`：用于定义插槽,通过这个函数定义的插槽可以在模板中直接使用,而不需要通过`$slots`来访问.

  ```vue
  <script setup>
  import { defineSlots } from 'vue';
  
  const slots = defineSlots();
  </script>
  ```

- `defineEmits`：用于定义组件触发的事件,通过这个函数定义的事件可以在模板中直接使用，而不需要通过`$emit`来触发.

  ```vue
  <script setup>
  import { defineEmits } from 'vue';
  
  const emits = defineEmits(['update:title', 'click']);
  </script>
  ```

- `defineExpose`：用于暴露组件的方法或数据。通过这个函数暴露的方法或数据可以在父组件中直接访问.

  ```vue
  <script setup>
  import { defineExpose } from 'vue';
  
  const data = 'example';
  
  const method = () => {
    console.log('Example method');
  };
  
  defineExpose({
    data,
    method
  });
  </script>
  ```

- `useAttrs`：用于获取父组件传递给子组件的非props属性.

  ```vue
  <template>
    <child-component v-bind="$attrs" />
  </template>
  
  <script setup>
  import { useAttrs } from 'vue';
  
  const attrs = useAttrs();
  </script>
  ```

- `useSlots`：用于获取父组件传递给子组件的插槽内容.

  ```vue
  <template>
    <slot v-bind="slots" />
  </template>
  
  <script setup>
  import { useSlots } from 'vue';
  
  const slots = useSlots();
  slots.default //如果父组件没有使用该插槽则slots.slotName为undefined否则为一个箭头函数
  </script>
  ```

综合案例如下:

```vue
<template>
  <!-- 模板内容 -->
</template>

<script setup>
import { ref, computed,defineProps,defineSlots,defineEmits,defineExpose,useAttrs,useSlots,} from 'vue'; 
// 声明 props
const props = defineProps({ //接收
  message: String,
});
// 声明 context部分和使用
const { nonProp } = attrs;
const emits = defineEmits(['custom-event']);
console.log(slots.slot);
expose({ count, myMethod }); //将count变量、doubledCount函数都暴露给了父级组件,父组件就可以通过当前组件的实例来访问

// 定义响应式数据
const count = ref(0);
// 定义计算属性
const doubledCount = computed(() => count.value * 2);
// 定义方法
function increment() {
  count.value++;
}
onMounted(()=>{ //生命周期函数
  console.log("onMounted 执行");
  treeControlSwitch(isCollapse.value);
  setChart();
}); 

// 无需return手动返回    
    
</script>

<style>
/* 样式 */
</style>
```

#### export default \{\}
#####` tips` 虽然Vue3也支持Vue2这种写法,但是不建议用这种方式

```vue
<template>
  <!-- 模板内容 -->
</template>

<script>
import { ref, computed } from 'vue';

export default {
  components: { //定义子组件
    ChildComponent,
  },
  props: { //定义父组件传递过来的数据格式,也可用数组形式 props:["property","method"],
    disabled: {
    typeof: Boolean,
       default: false
    }
  },
  setup(props, context) {
    onst vmodel = ref(false);  //响应式变量
    const handleClose = (done, iconClose) => {}; //方法
	watch( //监视器
      () => props.height,
      (newVal, oldVal) => {
        top.value = calcHeight();
      }
    );
    onMounted() { //定义计算属性，这些属性的值会根据依赖变化而变化
      console.log('组件已挂载到 DOM');
 	}
    return {
      count: ref(0),
      vmodel,
      handleClose
    }; 
  }
};
</script>

<style>
/* 样式 */
</style>
```

####

### API

```javascript
setup({
    //钩子
    //function
    //data
    true
    return{
    	//dataName
    	//functionName
	}
}) //组合式API
const instance = getCurrentInstance(); // 获取当前组件实例
instance.mittBus.emit('mittFn',{name: formInline.username}) //触发总线上指定的事件
const message = ref(instance.appContext.config.globalProperties.message); // 获取全局属性的值
```

自定义事件和事件总线

```JavaScript
emitter.emit('事件名', 参数) //触发总线上指定的事件
emitter.off('事件名') //清除总线上指定事件
emitter.all.clear() //清除总线上绑定的所有事件
onMounted(() => {
	emitter.on('event1', showInfo)
}) //绑定事件



```

### 深度作用选择器
```vue
<!--总结: 尽量避免使用 /deep/ .child){} 和 ::v-deep .child {} , 推荐使用 :deep (.child) {} 来实现深度作用选择器。-->

/* ::v-deep (.child) {} , 写法:  */
<template>
  <div class="parent" >
    <child-component class="child"></child-component>
  </div>
</template>

<style scoped lang="SCSS">
:deep(.child){
    color: red;
}
</style>
```

```vue
/* ::v-deep .child {} 已废弃, 
与 /deep/ 类似，它可以修改子组件中的样式。不过，它只会影响被包裹在带有 scoped 属性的样式中的选择器: */
<template>
  <div class="parent" >
    <child-component class="child"></child-component>
  </div>
</template>
<style scoped lang="SCSS">
  ::v-deep .child {
    color: red;
  }
::deep(.child){
    color: red;
}
</style>

```
```vue
/* /deep/ .some-class {} 已废弃，
它可以穿透子组件，应用样式到所有后代元素: */
<template>
  <div>
    <child-component></child-component>
  </div>
</template>

<style scoped lang="SCSS" >
  /deep/ .some-class {
    color: red;
  }
</style>
```

### 插槽

让父组件可以向子组件指定位置插入html结构,也是一种组件间通信的方式，适用于 父组件 ===> 子组件 ,在Vue 3中,引入了新的插槽语法,包括默认插槽\具名插槽和作用域插槽.

**`注意`**

1.作用域插槽的scope="prognav" 写法已过时 , 由 v-slot=slotName="prognav" 代替

2.当一个组件同时接收默认插槽和具名插槽时,所有位于顶级的非 `<template>` 节点都被隐式地视为默认插槽的内容

#### 1.默认插槽（Default Slot）

默认插槽是指在父组件中没有具名插槽时，默认将内容传递给子组件的插槽。在父组件中使用`<template v-slot:default>`或简写为`<template #default>`来定义默认插槽。在子组件中使用`<slot></slot>`来渲染默认插槽的内容。

父组件：

父组件：

```vue
<ChildComponent>
  <template v-slot:default>
    <p>默认插槽的内容</p>
  </template>
</ChildComponent>
```

子组件：

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

#### 2.具名插槽（Named Slot）

具名插槽用于在父组件中定义多个命名的插槽，并且子组件根据名称选择性地接收和渲染插槽内容。在父组件中使用`<template v-slot:slotName>`或简写为`<template #slotName>`来定义具名插槽。在子组件中使用`<slot name="slotName"></slot>`来渲染对应名称的插槽内容。

父组件：

```vue
<ChildComponent>
  <template v-slot:header>
    <h1>Header插槽的内容</h1>
  </template>
  <template v-slot:footer>
    <p>Footer插槽的内容</p>
  </template>
</ChildComponent>
```

子组件：

```vue
<template>
  <div>
    <slot name="header"></slot>
    <slot name="footer"></slot>
  </div>
</template>
```

#### 3.作用域插槽（Scoped Slot）

作用域插槽 是一种非 常强大的 组件通信方式，可以让组件之间更加灵活地共享数据和交互,有具名作用域插槽和默认作用域插槽,他们允许**父组件将数据传递给子组件的插槽，并在插槽内部进行处理**。

**`注意`** `<slot :content="defaultData"></slot>`中的`content`是一个插槽属性名，用于向子组件传递数据。它可以是任意你定义的属性名，用来表示将要传递给子组件的数据。

##### 3.1.具名作用域插槽（Named Scoped Slot）

允许父组件向子组件传递数据，并在子组件内部使用该数据进行处理。通过具名插槽，可以定义多个不同的插槽，并在父组件中选择性地传递数据给每个插槽。在父组件中，使用`<template v-slot:mySlotName="slotProps">`或简写为`<template #mySlotName="slotProps">`来定义一个具名插槽，并将数据通过`slotProps`传递给子组件。在子组件中，使用`<slot :title="headerData"></slot>`将数据接收并在插槽内使用。

父组件：

```vue
<ChildComponent>
  <template v-slot:mySlotName="slotProps">
    <h1>{{ slotProps.title }}</h1> <!--向具名插槽传递一个title数据-->
  </template>
</ChildComponent>
```

子组件：

```vue
<template>
  <div>
    <slot name="mySlotName" :title="headerData"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerData: '这是标题'
    };
  }
}
</script>
```

##### 3.2.默认作用域插槽（Default Scoped Slot）

没有指定名称的作用域插槽，当父组件中没有使用具名插槽时，默认将内容传递给子组件的默认插槽。在父组件中，可以使用`<template v-slot:default="slotProps">`或简写为`<template #default="slotProps">`来定义默认作用域插槽，并通过`slotProps`传递数据给子组件。在子组件中，使用`<slot :propName="data"></slot>`来接收并使用传递的数据。

父组件：

```html
<ChildComponent>
  <template v-slot:default="slotProps">
    <p>{{ slotProps.content }}</p>
  </template>
</ChildComponent>
```

子组件：

```html
<template>
  <div>
    <slot :content="defaultData"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultData: '这是默认内容'
    };
  }
}
</script>
```

### Router

#### 两种路由模式

```JavaScript
const router = createRouter({
	//路由的模式设置
    history: createWebHashHistory(), 
    routes
})
//指定了路由的模式为 hash 模式。在 hash 模式下，URL 中的路径会以 # 号开头，例如："http://192.168.187.167:9990/#/Water"。路由器将监听 URL 中 hash 的变化，并据此来匹配路由配置，并显示对应的组件;

const router = createRouter({
    //路由的模式设置
    history: createWebHistory(),
    routes
});
指定了路由的模式为 history 模式，即使用 HTML5 History API 来管理路由,在 history 模式下，URL 中的路径看起来更加直观，例如："http://localhost:856/hospital/register_setp";

hash 模式和 history 模式都有各自的优势和劣势，下面是它们的比较：

Hash 模式的优势：

兼容性好：Hash 模式可以在所有浏览器中使用，包括老版本的浏览器。
简单配置：使用 Hash 模式不需要额外的服务器配置，只需配置前端路由即可。
部署简单：Hash 模式在部署时只需将静态文件放置在任意服务器上即可，不需要额外的配置。
Hash 模式的劣势：

URL 不美观：Hash 模式会在 URL 中添加一个 # 号，对于一些用户来说，这样的 URL 可能不够美观。
SEO 不友好：搜索引擎对于带有 # 号的 URL 的处理可能不够友好，可能会影响 SEO 效果。
无法精确匹配：Hash 模式只能匹配到 # 后面的部分，无法精确匹配到更深层级的路径。
History 模式的优势：

URL 美观：History 模式可以使用普通的 URL，没有额外的特殊字符。
SEO 友好：使用 History 模式的应用可以更好地被搜索引擎索引，有利于提高网站的可搜索性。
适合正式环境：History 模式更适合在正式环境中使用，可以提供更好的用户体验。
History 模式的劣势：

兼容性局限：History 模式需要浏览器支持 HTML5 History API，一些老版本的浏览器可能不支持。
需要服务器配置：使用 History 模式需要服务器配置支持，以确保在刷新页面或直接访问 URL 时能够正确返回对应的页面。
部署复杂：History 模式在部署时需要配置服务器，以确保在前端路由无法匹配到对应路径时，能够正确返回 index.html 页面。
```






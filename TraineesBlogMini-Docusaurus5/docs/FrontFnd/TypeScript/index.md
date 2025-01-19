---
sidebar_position: 5
---

# TypeScript

### tsconfig.json

```typescript
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
        
    //允许 import 语句中的路径以 '.ts' 或 '.tsx' 结尾
    "allowImportingTsExtensions": true,
        
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    
    // 设置类型声明文件的根目录
    "typeRoots": ["./node_modules/@types", "./src/types"],
    // 指定要包含的类型声明文件
    "types": ["webpack-env", "jest", "@vue/runtime-core"],

    //让IDE可以进行路径智能提示,不配置此项vite.config.ts或webpack.config.ts的src文件夹别名配置不会生效,从而使用ts导入语法时报错.
    // 基础路径，通常是项目根目录
    // 主要影响 TypeScript 编译过程
    "baseUrl": "../station-indicator-screen",
    "paths": {
      // 将 @ 别名映射到 src 目录下
      "@/*": ["src/*",]
    },
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }],
}
```

### tsconfig.node.json

```typescript
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### react-app-env.d.ts

ts导入js依耐时会报错需要.d.ts中声明

```typescript
// 当在ts环境导入
import { FullScreenContainer,BorderBox1 } from '@jiaminghi/data-view-react';
// 到如下错误
ERROR in src/components/StationScreen2.tsx:5:48
TS7016: Could not find a declaration file for module '@jiaminghi/data-view-react'. 'E:/DevelopmentKitData/Microsoft/VSCode/Projects/FudaAutomation/station-indicator-screen/node_modules/@jiaminghi/data-view-react/lib/index/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/jiaminghi__data-view-react` if it exists or add a new declaration (.d.ts) file containing `declare module '@jiaminghi/data-view-react';`
```

这个错误信息表明在你的代码中导入的 `@jiaminghi/data-view-react` 模块没有相应的声明文件，而且该模块的默认导出类型被隐式推断为 `any` 类型 ,解决这个问题的方法有两种：

**方法一：安装对应的声明文件**

尝试运行以下命令来安装可能存在的 `@types/jiaminghi__data-view-react` 声明文件：

```shell
npm i --save-dev @types/jiaminghi__data-view-react
```

这个命令会在项目中安装与 `@jiaminghi/data-view-react` 对应的声明文件。然后，在你的代码中重新编译，看看是否能够解决问题。

**方法二：创建自定义声明文件**

如果找不到适合的类型声明文件(不是所有的框架都提供的有ts版本)，你可以手动创建一个自定义的声明文件来解决该问题：

1. 在你的项目根目录下创建一个新文件，命名为 `data-view-react.d.ts` （或者任何你喜欢的名称或用框架自创的react-app-env.d.ts）。
2. 在 `react-app-env.d.ts` 或自定义的文件 `data-view-react.d.ts` 中添加以下代码：

```typescript
clare module '@jiaminghi/data-view-react';
```

保存文件，并重新编译你的代码，这样，TypeScript 将不再报错，并且可以正确地推断 `@jiaminghi/data-view-react` 模块的类型。

**注意**:自定义声明文件只是解决问题的一种临时措施，它并不提供真正的类型检查。如果官方发布了真正的声明文件，建议使用官方的声明文件来替换自定义声明文件。

### Type关键字

- `type` 关键字用于创建类型别名，可以给现有类型起一个新的名字。
- 可以使用 `type` 来定义任何类型，包括原始类型、联合类型、交叉类型、函数类型、对象类型等。
- 可以使用 `type` 来创建复杂的类型组合，例如交叉类型和联合类型的组合。
- `type` 可以使用泛型参数来创建通用的类型别名。

```typescript
type Name = string;
type Age = number;

type Person = {
  name: Name;
  age: Age;
};

type Result<T> = {
  success: boolean;
  data: T;
};
```

###  Interface关键字

- `interface` 关键字用于创建接口，可以描述对象的形状（属性和方法）以及对象的行为。
- 可以使用 `interface` 来定义对象类型，包括对象的属性、方法、可选属性、只读属性等。
- `interface` 也可以扩展其他接口，通过 `extends` 关键字实现接口的继承。
- 接口可以用于类的实现（implements），使得类必须符合接口定义的结构。

```typescript
interface Person {
  name: string;
  age: number;
}

interface Animal {
  name: string;
  readonly type: string;
}

interface Employee extends Person {
  role: string;
}

class Developer implements Employee {
  name: string;
  age: number;
  role: string;

  constructor(name: string, age: number, role: string) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
}
```

### 区别

1. **语法**：
    - `type` 使用 `type` 关键字定义类型别名。
    - `interface` 使用 `interface` 关键字定义接口。
2. **扩展**：
    - `type` 可以直接定义原始类型、联合类型、交叉类型等，但无法被类实现或继承。
    - `interface` 主要用于定义对象的形状和行为，可以被类实现或继承，并且支持接口间的继承。
3. **适用场景**：
    - 当需要定义复杂的类型别名或通用类型时，可以使用 `type`。
    - 当需要描述对象的结构和行为时，特别是在面向对象编程中，应优先使用 `interface`。

总的来说，`type` 和 `interface` 都是 TypeScript 中用于定义类型的重要工具，选择使用哪个取决于具体的场景和需求，通常情况下可以根据类型的复杂程度和用途来决定使用哪种方式。

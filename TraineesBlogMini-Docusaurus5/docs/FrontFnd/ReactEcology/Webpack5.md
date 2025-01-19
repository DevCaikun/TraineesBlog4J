---
sidebar_position: 4
---

# Webpack 5

### 配置资源路径别名

注 Webpack]配置进行改动后，都需要重新启动项目，不然不生效

```json
1.暴露隐藏的webpack配置
# React 官方脚手架默认是将 Webpack 配置隐藏起来了，在进行配置之前需要将 webpack 配置暴露出来,一旦暴露将不可逆转
yarn eject # 输入 y 回车

2.成功之后 在项目根目录会出现一个 config 文件夹,打开 config 文件夹下的 webpack.config.js 文件
搜索 webpackAliases 找到 alias 配置项，添加自定义路径别名,还需要配合ts的配置
alias: {
  ...省略若干代码
  // 将 @ key 设置为用nodejs相关路径拼接方法得到src的绝对路径字符串
  // 主要影响 Webpack 打包过程
  '@': path.resolve(__dirname, '../src'),
},
```




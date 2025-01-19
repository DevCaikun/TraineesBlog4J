---
sidebar_position: 1
---

# Node.js



### Download

https://nodejs.org/zh-cn/download/releases

### Install



## NVM

nvm即node version manager可以管理node不同版本之间的丝滑切换

#### Download

https://github.com/coreybutler/nvm-windows/releases

#### EnvironmentVariables

```ABAP
VariableUsername: NVM_HOME
VariableValue: D:\DevelopmentKit\Nvm
VariableUsername: NVM_SYMLINK
VariableValue: D:\DevelopmentKit\Nvm\nodejs
```

#### CMD

```shell
nvm root # 查看nvm安装路径 
nvm -v # 查看nvm版本
nvm version # 查看nvm版本
nvm list available # 查询可以下载的node版本
nvm install latest  # 下载最新的node版本和与之对应的npm版本
nvm install 20.10.0 #安装指定版本的node
nvm uninstall 20.10.0 # 卸载node 20.10.0 版本
nvm list # 查看已经安装的版本
nvm list installed #查看已经安装的版本
nvm use 20.10.0 # 选择当前系统使用的node版本
nvm alias <alias> <version> # 为指定的 Node.js 版本设置别名
nvm use <alias> # 通过别名切换到对应的 Node.js 版本。
nvm install 安装最新版本nvm
nvm current显示当前版本
nvm alias <name> <version> # 给不同的版本号添加别名
nvm unalias <name> # 删除已定义的别名
nvm reinstall-packages <version> # 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm on # 打开nodejs控制
nvm off # 关闭nodejs控制
nvm proxy # 查看设置与代理
nvm node_mirror [url] # 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 https://nodejs.org/dist/
nvm npm_mirror [url] # 设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/.
nvm uninstall <version> # 卸载制定的版本
nvm use [version] [arch] # 切换制定的node版本和位数
nvm root [path] # 设置和查看root路径
nvm version # 查看当前的版本
```



## NPM

package.js类似于Java的Maven里面记录了各种依赖内容

package-lock.js类似于Maven的锁版本记录了各种依赖的版本

```ABAP

```

#### EnvironmentVariables

例如安装路径:D:\DevelopmentKit\Nodejs\NodejsV16

``` ABAP
1.在当前目录下创建 node_cache 和 node_global 文件夹
2.SystemVariables:NODE_HOME D:\DevelopmentKit\Nodejs
3.SystemVariables:NODE_PATH D:\DevelopmentKit\Nodejs\NodejsV16\node_global\node_modules
4.SystemPath:%NODE_HOME%\NodejsV16
5.SystemPath:%NODE_HOME%\NodejsV16\node_global
7.把默认的系统变量Path C:\Users\xxx\AppData\Roaming\npm 删除
8.右击Nodejs(安装根目录)文件夹->属性->安全->选中用户名->编辑->将所有用户的所有权限全部 ✔
```

#### MirrorAndCache

Win键+X键 打开 WindowsPowerShell(管理员) 命令行窗口

```ABAP
1.设置自定义安装目:npm config set prefix “node_global的绝对路径” 
2.设置自定义缓存目录:npm config set cache “node_cache的绝对路径” 

3.设置最新淘宝镜像源地址:npm config set registry https://registry.npmmirror.com
	npm config set registry http://registry.npm.taobao.org 
	(已废弃,会被301重定向到 https://registry.npmmirror.com)
	
4.查看所有配置情况:npm config list
```

#### 开启yarn

nodejs16.10以上版本安装时自带了yarn，通过corepack 即可开启，执行命令如下：

Win键+X键 打开 WindowsPowerShell(管理员) 命令行窗口执行 不然报错

```ABAP
corepack enable # 16以上版本
```

#### 其他命令

```shell
npm root -g #查看默认缓存路径
npm config get registry #查看镜像源地址
node -v #查看nodejs版本
npm -v #查看npm版本
yarn -v #查看yarn版本
npm root -g #修改设置默认缓存路径
npm info webpack #查看到 webpack 版本

npm config ls #查看所以配置
npm config list #查看所以配置

# npm config set registry https://registry.npm.taobao.org #设置镜像源地址
npm config set prefix “node_global的绝对路径” #设置自定义安装目
npm config set cache “node_cache的绝对路径” #设置自定义缓存目录 

npm install -g webpack #全局安装 webpack

npm cache clean --force #清除缓存
yarn cache clean #清除缓存


```


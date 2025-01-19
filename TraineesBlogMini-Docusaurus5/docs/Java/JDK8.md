---
sidebar_position: 1
---

# JDK8

RockyLinux9安装

```shell
# 下载地址
https://jdk.java.net/archive

# 创建software文件夹,并上传JDK安装包
mkdir /software

# 进入所在文件夹,解压包
tar -zxvf openjdk-11.0.2_linux-x64_bin.tar.gz

# 编辑环境变量配置文件
vim /etc/profile

# 按i进行编辑，在末尾添加以下命令
export JAVA_HOME=/software/jdk-11.0.2 #换成你jdk的安装目录
export JRE_HOME=${JAVA_HOME}
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH

# 刚刚的配置生效：
source /etc/profile

# 验证是否安装成功,查看当前 jdk 版本信息：
Java -version
```

RockyLinux9运行

```shell
# 运行jar
nohup Java -jar /app/TraineesBlog/Surfer-1.0.0.jar -Xms200m -Xmx200m --spring.profiles.active=prod > /dev/null 2>&1 &
nohup Java -jar /app/traineesblog/Surfer-1.0.0.jar -Xms200m -Xmx200m --spring.profiles.active=prod > output.log 2>&1 &
Java -jar /app/traineesblog/Surfer-1.0.0.jar --spring.profiles.active=prod
# 查看java运行情况
ps -ef | grep Surfer
#  杀死进程/结束jar运行
kill -9 PID
```



#### BeanUtils

##### copyProperties

```java
@Override
public void cartAdd(CartAddDTO cartAddDTO) {
    // 当前方法参数类型是CartAddDTO,但是执行新增的mapper方法参数类型是Cart
    // 所以我们需要先将cartAddDTO对象中的属性赋值到Cart类型对象中
    // 先实例化一个Cart类型对象
    Cart cart=new Cart();
    // 利用BeanUtils工具类中,能够将不同类型对象的同名属性赋值的方法
    BeanUtils.copyProperties(cartAddDTO,cart);
    // 具备了参数的条件之后,可以执行mapper的方法进行数据库的新增
    cartMapper.insertCart(cart);
    // 运行完成,log输出一下
    log.info("新增购物车商品成功:{}",cart);
}
```

## 

---
sidebar_position: 4
---

# SpringCloud2023


### POM模块调用

#### 依赖被调模块

```xml
<groupId>cn.tedu</groupId>
<artifactId>csmall</artifactId>
<version>0.0.1-SNAPSHOT</version>
<name>csmall</name>
<description>csmall</description>
```

#### 扫描被调模块

```java
@Configuration // 只有添加了@Configuration才能配置当前Spring环境
@ComponentScan("cn.tedu.csmall.commons.exception") // 要扫描commons模块中的统一异常处理类,才能令其在当前项目中生效
public class CommonsConfiguration {
}
```



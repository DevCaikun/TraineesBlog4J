---
sidebar_position: 4
---

# Gradle

## 

```shell
1.下载:https://services.gradle.org/distributions/
2.环境变量:
    System: GRADLE_HOME D:\DevelopmentKit\Gradle
	System.path: %GRADLE_HOME%\bin;
3.D:\DevelopmentKit\gradle-8.5\ 目录下新建 init.d 文件并设置如下配置:
allprojects {
    repositories { 
		maven { url 'file:///E://DevelopmentKitData//Gradle//Repositorys'} --这个是新建本地仓库的路径，注意不要写错为“\”
        mavenLocal() 
        maven { name "Alibaba" ; url "https://maven.aliyun.com/repository/public" } --这是国内镜像，下载依赖会快些
        maven { name "Bstek" ; url "https://nexus.bsdn.org/content/groups/public/" } 
        mavenCentral()
    }
    buildscript {
        repositories { 
            maven { name "Alibaba" ; url 'https://maven.aliyun.com/repository/public' } 
            maven { name "Bstek" ; url 'https://nexus.bsdn.org/content/groups/public/' } 
            maven { name "M2" ; url 'https://plugins.gradle.org/m2/' }
        }
    }
}
```



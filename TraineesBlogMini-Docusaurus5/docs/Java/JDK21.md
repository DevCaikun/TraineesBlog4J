---
sidebar_position: 3
---

# JDK21

#### Linux安装

##### DNF源安裝

```shell
sudo dnf search openjdk # rockylinux8查看可安装的开源jdk版本



```

##### RPM二进制软件包安装

```shell
# 参考 https://blog.csdn.net/qq_32048567/article/details/127497442

# 获取下载链接
# 进入官网 https://jdk.java.net
# 选择 GA Releases 为 JDK21
# 选择 Builds 为 Linux-Rocky / x64 tar.gz (sha256)	
# 然后在浏览器下载进程中复制下载链接
sudo dnf install libaio # 可以自动从默认的软件源中下载并安装所需的库文件
sudo dnf install -y @development # 在 Rocky Linux-Rocky 上安装必要的构建工具和依赖项

# 创建一个用于存储安装包和源代码的目录，并进入该目录：
mkdir jdk-21
mkdir downloads
cd downloads
# 源代码包的下载 # cd 到下载目录下 
wget https://download.java.net/java/GA/jdk21/fd2272bbf8e04c3dbaee13770090416c/35/GPL/openjdk-21_linux-x64_bin.tar.gz
wget https://download.oracle.com/java/21/latest/jdk-17_linux-x64_bin.tar.gz
# 解压到指定目录并去除顶层目录
sudo tar -xvf openjdk-21_linux-x64_bin.tar.gz -C /usr/jdk-21 --strip-components=1
# 或解压到当前下载目录 # 然后移动到移动到/usr/local/jdk-21目录
tar -xvf openjdk-21_linux-x64_bin.tar.gz
sudo mv openjdk-21_linux-x64_bin /usr/jdk-21

# 配置环境变量
export JAVA_HOME=/usr/jdk-21
export CLASSPATH=.:$JAVA_HOME/lib
export PATH=.:$JAVA_HOME/bin:$JAVA_HOME/lib:$PATH
#刷新配置文件
source /etc/profil
Java -version # 测试
```

#### POJO

POJO（Plain Old Java Object）是指普通简单的Java数据对象，它是一个纯粹的、传统的Java类，通常用于表示没有实现任何特定的接口或继承特定的类，它只包含属性和相应的getter和setter方法。

*数据库我们为了节约空间，像性别这样的字段我们用0和1表示，数据库查出来的对象不可能用这样的对象给前端，用户看不懂体验也不好所以我们查询出来entity对象后我们需要转换为vo对象（用户看的懂的数据，需要展示的数据），前端用户输入表单传入的对象是DTO对象，我们需要对DTO进行操作转化为entity对象存入数据库。*

1. Entity（实体类）：Entity是指在领域驱动设计中表示业务实体的类。实体类通常与数据库表一一对应，用于表示持久化的数据对象，实体类可以包含属性、行为和业务逻辑。

    - **目的：** Entity 主要用于表示数据库中的表，强调数据在数据库中的存储结构。

    - **特点：** Entity 包含业务逻辑，通常用于映射数据库表，可能包含持久化和关联操作。

    - **在哪使用：** 在数据访问层中使用，用于与数据库进行交互。

    - **传递方向：** 通常用于从数据访问层返回到服务层或业务逻辑层。

    - **用于哪个层：** 主要用于数据访问层。

    - **总结：** 对应数据库的字段的对象,一般在Service和Mapper层调度使用。

      ```java
      @Data
      public class UserEntity {
          private Long id;
          private String username;
          private String password;
      }
      ```



2. DTO（Data Transfer Object）：DTO用于在不同层之间传输数据。它是一个简单的POJO，通常用于封装来自数据库查询或其他数据源的数据，并且可以提供给上层模块使用。DTO的设计目标是减少跨层传输的数据量，以提高性能和减少网络开销。

    - **目的：** DTO 主要用于在不同层次或服务之间传递数据，强调数据传递的需要。

    - **特点：** DTO 是一个数据结构，用于携带数据而不包含业务逻辑。

    - **在哪使用：** 在服务层、数据访问层、或跨系统之间的数据传输中使用，用于解决数据传输时的性能开销和信息泄露问题。

    - **传递方向：** 通常用于从表示层传递到服务层，或者在服务层之间传递。

    - **用于哪个层：** 主要用于服务层和表示层之间的数据传输。

    - **总结：** 前端传到后端的数据,一般在Controller和Service层调度使用。

      ```java
      @Data
      public class UserInfoDTO {
          private Long userId;
          private String userName;
          private String email;
      }
      ```

3. VO（Value Object）：VO也是一个用于传输数据的对象，但与DTO不同的是，VO通常用于封装一组相关的数据，这些数据在逻辑上

   具有一定的关联性。VO通常用于表示一些特定的视图或展示层的数据对象。

    - **目的：** VO 主要用于表示领域模型中的值，强调在业务逻辑中表示的概念。

    - **特点：** VO 是不可变的，通常包含一组相关属性，没有业务逻辑，具有值语义。

    - **在哪使用：** 在业务逻辑层和领域模型中使用，用于表示业务领域的实体的属性。

    - **传递方向：** 通常用于从领域层传递到业务逻辑层，或者从业务逻辑层传递到表示层。

    - **用于哪个层：** 主要用于领域模型和业务逻辑层。

    - **总结：** 后端传到前端的数据对象,一般在Controller和Service层调度使用。

      ```java
      @Data
      public class UserVO {
          private Long id;
          private String name;
      }
      ```

   **总结** :

   Controller : 向上接收 DTO ↓ , 向下传递 DTO ↓ , 向上返回 VO ↑

   Service : 向上接收 DTO ↓  ,  向下传递 Entity ↓ , 向上返回 VO ↑ (业务逻辑层需要对DTO/VO/Entity进行转换处理操作)

   Mapper :  向上接收 Entity ↓ , 向下传递 Entity ↓ , 向上返回 Entity↑



#### DAO

Data Access Object的简写,即数据访问层又称**Repository**层(相当于如今MVC的Mapper层)是一种设计模式，用于封装对数据源（如数据库、文件等）的访问和操作。DAO通常包含了对数据的增删改查等基本操作方法，以及与数据源的交互逻辑。

- 在Java中，DAO通常定义为接口或抽象类，具体的数据访问逻辑则由具体的实现类来完成。这样做的好处是可以将数据访问逻辑与业务逻辑分离，提高代码的可维护性和可测试性。

#### Mapper

- Mapper通常是指在持久层(之前的DAO层)框架（如MyBatis）中用于映射数据对象和数据库表的组件。在MyBatis中，Mapper负责定义数据查询和操作的接口，以及与实际SQL语句的映射关系。
- Mapper接口定义了对数据对象的操作方法，而Mapper的实现则由持久层框架来自动生成或手动编写。在实际使用中，通过调用Mapper接口定义的方法，可以方便地进行数据库操作。

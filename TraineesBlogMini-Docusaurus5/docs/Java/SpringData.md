---
sidebar_position: 4
---

## SpringData

原生状态下,我们使用JDBC连接数据库,因为代码过于繁琐,所以改为使用Mybatis框架,在ES的原生状态下,我们java代码需要使用socket访问ES,但是也是过于繁琐,我们可以使用SpringData框架简化,Spring Data是Spring提供的一套连接各种第三方数据源的框架集,我们需要使用的是其中连接ES的Spring Data Elasticseatrch

```ABAP
启动: 
默认端口: 
控制台网址: 
官网:https://spring.io/projects/spring-data
```

### 依赖

```xml
<!-- search项目 -->

    <!-- 在父项目中定义版本号信息 -->
    <properties>
        <spring-boot.version>2.5.4</spring-boot.version>
    </properties>

    <!-- 锁版本 -->
    <dependencyManagement>
        <dependencies>
                <!-- Spring Boot：基础框架 -->
                <dependency>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter</artifactId>
                    <version>${spring-boot.version}</version>
                </dependency>
                <!-- Spring Boot Test：测试 -->
                <dependency>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-test</artifactId>
                    <version>${spring-boot.version}</version>
                    <scope>test</scope>
                </dependency>
                <!-- Spring Boot Data Elasticsearch：文档搜索 -->
                <dependency>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
                    <version>${spring-boot.version}</version>
                </dependency>
        </dependencies>
    </dependencyManagement>


    <!-- Search相关依赖 -->
    <dependencies>
        <!-- Spring Boot：基础框架 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>    
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        <!--  为了方便测试添加测试依赖  -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
        <!--  spring data elasticsearch 依赖   -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
        </dependency>
    </dependencies>
```

### 配置文件

```properties
# search项目


# 配置ES所在的ip地址和端口号
spring.elasticsearch.rest.uris=http://localhost:9200
# 设置日志门槛,用于显示ES运行信息
logging.level.cn.tedu.search=debug
# SpringDataElasticsearch框架中有一个专门的类来输出运行信息,也要设置为debug
logging.level.org.elasticsearch.client.RestClient=debug
```

### @Document



### @Id



### @Field

### 自定义查询

SpringData框架提供的基本增删改查方法并不能完全满足我们的业务需要,如果是针对当前Es数据,进行个性化的自定义查询,那还是需要自己编写查询代码,就像我们要实现根据关键词查询商品信息一样,完成类似数据库中的模糊查询

#### 单条件查询

我们查询需求为输出所有数据中title属性包含"游戏"这个分词的商品信息

> 参考数据库中模糊查询
>
> ```sql
> select * from item where title like '%游戏%'
> ```

我们使用SpringDataES进行查询,本质上还是相当于ES文档中执行的查询语句,在SpringData框架下,ItemRepository接口中实现更加简单

```java
// SpringData实现自定义查询
// 我们要编写遵循SpringData给定格式的方法名
// SpringData会根据我们编写的方法名自动完成数据操作
// query(查询):表示当前方法是一个查询方法,类似sql语句中的select
// Item/Items:确定要查询哪一个实体类,不带s的是单个对象,带s是集合
// By(通过/根据):标识开始设置查询条件,类似sql语句中的where
// Title:要查询的字段,可以根据查询条件修改为Item中的任何字段
// Matches:执行查询的操作,Matches表示字符串的匹配,而且这个匹配是支持分词的,类似sql语句的like

Iterable<Item> queryItemsByTitleMatches(String title);
```

下面可以开始在测试类中进行测试查询

```java
// 单条件查询
@Test
void queryOne(){
    // 查询ES中items索引里,title字段包含"游戏"分词的数据
    Iterable<Item> items=itemRepository.queryItemsByTitleMatches("游戏");
    items.forEach(item -> System.out.println(item));

}
```

上面代码运行时底层运行的查询语句为:

```json
### 单条件搜索
POST http://localhost:9200/items/_search
Content-Type: application/json

{
  "query": {"match": { "title":  "游戏" }}
}
```

#### 多条件查询

在相对复杂的查询逻辑下,经常使用多个条件来定位查询需要的数据,这样就需要逻辑运算符"and"/"or",ItemRepository接口中添加多条件的查询方法

```java
// 多条件查询
// 多个条件之间要使用逻辑运算符and或or来分隔,表示多个条件间的逻辑关系
// 我们如果要查询title包含某个关键字的同时指定品牌的查询
// 多个参数时,SpringData会按照参数声明的顺序向需要参数的位置赋值,和参数名无关
Iterable<Item> queryItemsByTitleMatchesAndBrandMatches(String title,String brand);
```

测试代码如下

```java
// 多条件查询
@Test
void queryTwo(){
    // 查询ES中items索引里,title字段包含"游戏"并且品牌是"罗技"的数据
    Iterable<Item> items=itemRepository.queryItemsByTitleMatchesAndBrandMatches("游戏","罗技");
    items.forEach(item -> System.out.println(item));
}
```

底层运行的请求

```json
### 多字段搜索
POST http://localhost:9200/items/_search
Content-Type: application/json

{
  "query": {
    "bool": {
      "must": [
        { "match": { "title": "游戏"}},
        { "match": { "brand": "罗技"}}
      ]
    }
  }
}
```

当查询条件关系为And时,查询语句关键字为must,当查询条件关系为Or时,查询语句关键字为should

#### 排序查询

默认情况下从ES中查询获得的数据排序依据是ES查询得出的相关性分数(score),但是如果想改变这个排序就需要在查询方法上添加新的关键字,在ItemRepository接口添加具备排序功能的查询方法

```java
// 排序查询
Iterable<Item> queryItemsByTitleMatchesOrBrandMatchesOrderByPriceDesc(String title,String brand);
```

测试代码如下

```java
//  排序查询
@Test
void queryOrder(){
    Iterable<Item> items=itemRepository.queryItemsByTitleMatchesOrBrandMatchesOrderByPriceDesc("游戏","罗技");
    items.forEach(item -> System.out.println(item));
}
```

底层运行的代码

```json
### 多字段搜索
POST http://localhost:9200/items/_search
Content-Type: application/json

{
  "query": {
    "bool": {
      "should": [
        { "match": { "title": "游戏"}},
        { "match": { "brand": "罗技"}}
      ]
    }
  },"sort":[{"price":"desc"}]
}
```

#### 分页查询

SpringData框架支持完成分页查询,需要在ItemRepository接口中修改方法的参数和返回值就可以实现

```java
// 分页查询
// 返回值类型修改为Page类型,这个类型中包含了查询到的当前页数据和本次查询的相关分页信息
// 分页信息指:当前页码,总页数,总条数,每页条数,是否有上一页,是否有下一页等
// 方法参数要添加Pageable,在所有的参数后再添加一个新的参数类型 Pageable
Page<Item> queryItemsByTitleMatchesOrBrandMatchesOrderByPriceDesc(String title, String brand, Pageable pageable);
```

测试代码

```java
// 分页查询
@Test
void queryPage(){
    int page=2;      //要查询的页码
    int pageSize=2;  //每页的数据条数
    Page<Item> pages=itemRepository.queryItemsByTitleMatchesOrBrandMatchesOrderByPriceDesc(
                    "游戏","罗技", PageRequest.of(page-1,pageSize));
    pages.forEach(item -> System.out.println(item));
    // pages对象的分页信息输出
    System.out.println("总页数:"+pages.getTotalPages());
    System.out.println("总条数:"+pages.getTotalElements());
    System.out.println("当前页码:"+(pages.getNumber()+1));
    System.out.println("每页条数:"+pages.getSize());
    System.out.println("是否为首页:"+pages.isFirst());
    System.out.println("是否为末页:"+pages.isLast());

}
```

## 





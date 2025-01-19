---
sidebar_position: 4
---

## PageHelper

所谓分页,就是查询结果数据较多时,采用按页显示的方法,而不是一次性全部显示,我们可以使用sql语句中添加limit关键字的方法实现分页查询,但是查询分页内容时,我们要自己计算相关的分页信息和参数   **limit 0,10      limit  10,10**

**分页的优点:**

1. 服务器:一次性查询所有信息,服务器压力大,分页查询服务器压力小
2. 客户端:一次性显示所有信息,需要更多流量,加载时间也会更长,分页显示没有这个问题
3. 用户体验上:一般最有价值的信息都会在前几页显示,也方便用户记忆,多查询出来的数据使用几率很低

实现分页查询需要我们开发过程中多几个步骤

#### 依赖

分页逻辑无论什么业务都是类似的,所以有框架帮助我们高效实现分页功能,PageHelper框架可以实现我们提供页码和每页条数,自动实现分页效果,收集分页信息,PageHelper的分页原理就是在程序运行时,在sql语句尾部添加limit关键字,并按照分页信息向limit后追加分页数据,要想使用,首先还是添加依赖,我们在之前搭建的微服务项目中先编写学习,建议使用csmall-order模块

```xml
<!-- csmall-order项目 -->

    <!-- 在父项目中定义版本号信息 -->
    <properties>
        <pagehelper-spring-boot.version>1.4.0</pagehelper-spring-boot.version>
    </properties>

    <!-- 锁版本 -->
    <dependencyManagement>
        <dependencies>
            <!-- PageHelper Spring Boot：MyBatis分页 -->
            <dependency>
                <groupId>com.github.pagehelper</groupId>
                <artifactId>pagehelper-spring-boot-starter</artifactId>
                <version>${pagehelper-spring-boot.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

<!-- PageHelper Spring Boot依赖 -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
</dependency>
```

#### 基本使用

##### 持久层

我们使用csmall-order-webapi模块来完成分页的测试,首先编写分页的持久层mapper,持久层功能是全查所有订单信息,OrderMapper添加方法

```java
// pageHelper框架完成分页功能的原理是sql语句后自动添加limit
// 所以在编写查询方法时,和普通查询没有任何区别
@Select("select id,user_id,commodity_code,count,money from order_tbl")
List<Order> findAllOrders();
```

注意这个方法并不需要任何分页的参数或返回值,sql也不需要编写limit,都是在业务逻辑层中由PageHelper框架处理的

##### 业务逻辑层

下面就转到业务逻辑层实现类,先编写一个方法使用PageHelper的功能,先不用写接口,直接在业务逻辑层中写方法,OrderServiceImpl添加方法

```java
// 分页查询所有订单信息的方法
// page是页码,pageSize是每页条数
public PageInfo<Order> getAllOrdersByPage(Integer page,Integer pageSize){
    // PageHelper框架实现分页功能最核心的代码要编写在执行查询的代码之前
    // 使用指定的代码设置要查询的页码和每页的条数
    // 在后面执行查询时,会自动按照这里指定的数据执行分页查询
    // page是页码,1就是查询第一页,pageSize是每页条数
    PageHelper.startPage(page,pageSize);
    // 下面执行查询操作,这个操作会被PageHelper框架在运行的sql语句末尾添加limit语句
    List<Order> list= orderMapper.findAllOrders();

    // list中的数据就是按照分页条件查询出来的某一页的数据
    // 但是分页查询方法返回的并不是list类型的对象,我们也需要获得分页的信息
    // 然后将查询出的数据和分页信息结合返回,这个类型,就是PageInfo
    
    return new PageInfo<>(list);
    
}
```

PageInfo对象既包含查询数据结果,又包含分页信息,数据结构如下图![PageInfo分页信息数据结构图](./PageInfo分页信息数据结构图.png)

**附:PageInfo全部分页信息属性**

```java
//当前页
private int pageNum;
//每页的数量
private int pageSize;
//当前页的行数量
private int size;
//当前页面第一个元素在数据库中的行号
private int startRow;
//当前页面最后一个元素在数据库中的行号
private int endRow;
//总页数
private int pages;
//前一页页号
private int prePage;
//下一页页号
private int nextPage;
//是否为第一页
private boolean isFirstPage;
//是否为最后一页
private boolean isLastPage;
//是否有前一页
private boolean hasPreviousPage;
//是否有下一页
private boolean hasNextPage;
//导航条中页码个数
private int navigatePages;
//所有导航条中显示的页号
private int[] navigatepageNums;
//导航条上的第一页页号
private int navigateFirstPage;
//导航条上的最后一页号
private int navigateLastPage;
```

##### 控制层

```java
@GetMapping("/page")
@ApiOperation("分页查询所有订单")
@ApiImplicitParams({
        @ApiImplicitParam(value = "页码",name="page",example = "1"),
        @ApiImplicitParam(value = "每页条数",name="pageSize",example = "8")
})
public JsonResult<PageInfo<Order>> pageOrders(
                                Integer page,Integer pageSize){
    PageInfo<Order> pageInfo=orderService.getAllOrdersByPage(page,pageSize);
    return JsonResult.ok("查询完成",pageInfo);
}
```

"启动Nacos\Seata","启动order",进行knife4j测试http://localhost:20002/doc.html#/home,可以观察控制台输出的运行的sql语句(会自动添加limit关键字)







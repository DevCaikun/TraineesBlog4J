---
sidebar_position: 4
---

## JsonPage

### 依赖

当前我们分页查询返回的类型是PageInfo,如果用这个类型来做业务逻辑层的返回值,当当前方法作为dubbo生产者对外提供服务时,消费者调用该服务需要使用PageInfo类型对象来接收,这样要求消费者也添加PageHepler依赖,这是不合理的,所以我们设计在commons模块中,添加一个专门用于返回分页结果的类JsonPage,代替PageInfo,这样当前微服务项目中,所有分页或类似的操作,就都可以使用这个类了,例如之前SpringDataElasticsearch框架也支持分页,返回类型为Page,它也可以替换为JsonPage,因为需要在commons模块中使用PageInfo类型,所以commons模块要添加pageHelper的依赖

```xml
<!--   为了将PageHelper框架中分页查询结果返回值PageInfo转换成JsonPage类型的依赖   -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.2.0</version>
</dependency>
```

### 基本使用

#### 创建工具类

在restful包中新建一个JsonPage类,代码如下

```java
@Data
public class JsonPage<T> implements Serializable {

    // 根据实际需求,定义需要的分页信息
    // 这里暂时只声明最基本的4个分页信息,如果有需求变化,随时添加即可
    @ApiModelProperty(value = "总页数",name="totalPages")
    private Integer totalPages;
    @ApiModelProperty(value = "总条数",name="totalCount")
    private Long totalCount;
    @ApiModelProperty(value = "当前页码",name="page")
    private Integer page;
    @ApiModelProperty(value = "每页条数",name="pageSize")
    private Integer pageSize;

    // JsonPage除了包含分页信息之外,也要包含查询到的数据
    @ApiModelProperty(value = "分页数据",name="list")
    private List<T> list;


    // 上面定义了所有分页需要的属性
    // 下面编写一个将PageInfo类型转换为JsonPage类型的方法
    // 如果需要转换别的类型(例如SpringData分页Page类型),编写一个新的方法即可
    public static <T> JsonPage<T>  restPage(PageInfo<T> pageInfo){
        // 所谓的转换就是将参数pageInfo中的信息,赋值到JsonPage对应的属性中
        JsonPage<T> result=new JsonPage<>();
        // 先赋值分页信息
        result.setTotalPages(pageInfo.getPages());
        result.setTotalCount(pageInfo.getTotal());
        result.setPage(pageInfo.getPageNum());
        result.setPageSize(pageInfo.getPageSize());
        // 再赋值分页数据
        result.setList(pageInfo.getList());
        // 最后返回赋完值的jsonPage对象
        return result;
    }

}
```

#### 业务逻辑接口

csmall-order-service**业务逻辑层接口**项目添加方法,返回值使用JsonPage

```java
// 返回JsonPage类型的分页查询全部订单方法
JsonPage<Order> getAllOrdersByPage(Integer page,Integer pageSize);
```

#### 业务逻辑实现类

csmall-order-webapi项目实现类中进行修改

```java
//     ↓↓↓↓↓↓↓↓
public JsonPage<OrderTb> getAllOrdersByPage(Integer pageNum, Integer pageSize){

    PageHelper.startPage(pageNum,pageSize);

    List<OrderTb> list= orderMapper.findAllOrders();

    //     ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    return JsonPage.restPage(new PageInfo<>(list));
}
```



#### 控制层

业务逻辑层返回值的修改影响控制器方法的调用,再去修改OrderController中方法调用的位置

```java
@Autowired
//      ↓↓↓↓↓↓↓↓↓↓↓↓
private IOrderService orderService;

//...
//                ↓↓↓↓↓↓↓↓
public JsonResult<JsonPage<Order>> pageOrders(Integer pageNum, Integer pageSize){
      // 分页调用
      //↓↓↓↓↓↓        ↓↓↓↓↓↓↓↓↓  
      JsonPage<Order> jsonPage=orderService.getAllOrdersByPage(
          pageNum,pageSize);
      //                            ↓↓↓↓↓↓↓↓↓↓
      return JsonResult.ok("查询完成",jsonPage);
}
```

保证启动Nacos\Seata,重启order测试,能出现查询结果即可





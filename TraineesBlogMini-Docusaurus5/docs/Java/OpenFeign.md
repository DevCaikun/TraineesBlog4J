---
sidebar_position: 4
---

#  OpenFeign

他是一个RPC框架和声明式HTTP客户端,提供了HTTP请求模板,目的是让远程调用更简单,通过编写简单的接口和插入注解就可以定义好HTTP请求的参数/格式/地址等信息.

他依赖于注册表和负载平衡,整合了Ribbon(负载均衡)和Hystrix(服务熔断),可以让我们不在需要显示的使用着两个组件,并在NetflixFeign的基础上扩展了对SpringMVC注解的支持,在其实现下,我们只需要创建一个接口并使用注解的方式来配置他即可完成对服务提供方的接口绑定,简化了SpringCloudRibbon自行封装服务调用客户端的开发量.

### 生产者

```java
package com.muyiafa.muyimall.coupon.controller;

@RefreshScope  //从Nacos配置中心动态获取配置信息
@RestController
@RequestMapping("coupon/coupon")
public class CouponController {

    @RequestMapping("/member/list")
    public R memberCoupons() {
        CouponEntity couponEntity = new CouponEntity();
        couponEntity.setCouponName("满一万减一块");
        //返回 value:key
        return R.ok().put("coupons", Arrays.asList(couponEntity));
    }
}
```

### 消费者

#### Dependency

```xml
<!--远程调用-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

#### @FeignClient("远程被调服务名")

声明为远程客户端用于调用远程服务

#### Interface

```java
package com.muyiafa.muyimall.member.feign;

//指定远程被调用的服务
@FeignClient("muyimall-coupon")
public interface CouponFeignService {
    //指定远程调用的方法签名,路径要写全需要加上类上的路径
    @RequestMapping("/coupon/coupon/member/list") 
    public R memberCoupons();
}
```

#### @EnableFeignClients(basePackages = "远程调用接口包路径")

```java
package com.muyiafa.muyimall.member;

//在启动类指定远程调用接口基础包
@EnableFeignClients(basePackages = "com.muyiafa.muyimall.member.feign")
@EnableDiscoveryClient
@SpringBootApplication
public class MuyimallMemberApplication {
    public static void main(String[] args) {
        SpringApplication.run(MuyimallMemberApplication.class, args);
    }
}
```

### 调用生产者

```java
package com.muyiafa.muyimall.member.controller;

@RestController
@RequestMapping("member/member")
public class MemberController {

    @Autowired
    CouponFeignService couponFeignService;//注入远程调用接口
    
    @RequestMapping("/coupon")
    public R Test() {
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setNickname("张三");
        R memberCoupons = couponFeignService.memberCoupons();//调用生产者
        return R.ok().put("member",memberEntity).put("coupons",memberCoupons.get("coupons"));
    }
}
```



---
sidebar_position: 4
---

# MyBatisPlus

合并了mapper和service层大大提高了开发效率

### 快速构建步骤

#### 1.创建数据库和表

```mysql
CREATE DATABASE `muyioa` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
use `muyioa`;

CREATE TABLE `sys_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `role_name` varchar(20) NOT NULL DEFAULT '' COMMENT '角色名称',
  `role_code` varchar(20) DEFAULT NULL COMMENT '角色编码',
  `description` varchar(255) DEFAULT NULL COMMENT '描述',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(3) NOT NULL DEFAULT '0' COMMENT '删除标记（0:不可用 1:可用）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='角色';
```

#### 2.spring pom依赖

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.4.1</version>
</dependency>
```

#### 3.创建Springboot配置文件

application.yml

```yaml
spring:
  application:
    name: muyioa-service
  profiles:
    active: dev
```

application-dev.yml

```yaml
server:
  port: 8800
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl # 打印日志
spring:
  datasource:
    type: com.zaxxer.hikari.HikariDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://192.168.111.131:3306/muyioa?serverTimezone=GMT%2B8&useSSL=false&characterEncoding=utf-8
    username: root
    password: root
```

#### 4.创建Springboot启动类

```java
@SpringBootApplication
public class ServiceOaApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceOaApplication.class);
    }
}
```

#### 5.创建实体类继承BaseEntity

```java
@Data
@ApiModel(description = "角色")
@TableName("sys_role")
public class SysRole extends BaseEntity {
	
	private static final long serialVersionUID = 1L;

	//@NotBlank(message = "角色名称不能为空")
	@ApiModelProperty(value = "角色名称")
	@TableField("role_name")
	private String roleName;

	@ApiModelProperty(value = "角色编码")
	@TableField("role_code")
	private String roleCode;

	@ApiModelProperty(value = "描述")
	@TableField("description")
	private String description;
}
```

#### 6.创建mapper继承MP接口

```java
public interface SysRoleMapper extends BaseMapper<SysRole> {
    //
}
```

#### 7.配置Spring依赖扫描

```java
@SpringBootApplication
@MapperScan("com.muyiafa.oa.mapper")
public class ServiceOaApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServiceOaApplication.class, args);
    }
}
```

mapper类添加*@Mapper*或*@Repository*注解

```java
@Mapper
public interface SysRoleMapper extends BaseMapper<SysRole> {
    //
}
```

#### 8.使用测试

```java
@SpringBootTest
public class TestMpDemo1 {
    //注入
    @Autowired
    private SysRoleMapper sysRoleMapper;
    
    @Test
    public void getAll() {
       List<SysRole> list = sysRoleMapper.selectList(null);
        System.out.println(list);
    }
}
```

### @TableName("sys_role")

```java
@Data
@ApiModel(description = "角色")
@TableName("sys_role") //对应SysRole实体类的数据表为role_name
public class SysRole extends BaseEntity {
	
	private static final long serialVersionUID = 1L;

	//@NotBlank(message = "角色名称不能为空")
	@ApiModelProperty(value = "角色名称")
	@TableField("role_name")
	private String roleName;

	@ApiModelProperty(value = "角色编码")
	@TableField("role_code")
	private String roleCode;

	@ApiModelProperty(value = "描述")
	@TableField("description")
	private String description;
}
```

### @TableField("sys_name")

```java
@Data
@ApiModel(description = "角色")
@TableName("sys_role")
public class SysRole extends BaseEntity {
	
	private static final long serialVersionUID = 1L;

	//@NotBlank(message = "角色名称不能为空")
	@ApiModelProperty(value = "角色名称")
	@TableField("role_name")  //对应role_name字段的属性值为roleName
	private String roleName;

	@ApiModelProperty(value = "角色编码")
	@TableField("role_code")
	private String roleCode;

	@ApiModelProperty(value = "描述")
	@TableField("description")
	private String description;
}

```

### @TableId(type = IdType.AUTO)

```java
@Data
public class BaseEntity implements Serializable {

    @TableId(type = IdType.AUTO) //主键注解 type = IdType.AUTO（数据库ID自增）
    private Long id;

    @TableField("create_time")
    private Date createTime;

    @TableField("update_time")
    private Date updateTime;

    @TableLogic
    @TableField("is_deleted")
    private Integer isDeleted;

    @TableField(exist = false)
    private Map<String,Object> param = new HashMap<>();
}
```

### @TableLogic

```java
package com.muyiafa.oa.model.base;

@Data
public class BaseEntity implements Serializable {

    @TableId(type = IdType.AUTO)
    private Long id;

    @TableField("create_time")
    private Date createTime;

    @TableField("update_time")
    private Date updateTime;

    @TableLogic //逻辑删除
    @TableField("is_deleted")
    private Integer isDeleted;

    @TableField(exist = false)
    private Map<String,Object> param = new HashMap<>();
}

```







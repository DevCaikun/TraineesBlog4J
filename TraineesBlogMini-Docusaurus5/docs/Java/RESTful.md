---
sidebar_position: 4
---

# RESTful


**一、请求方法 :**

RESTful是一种Web API设计风格，它强调使用HTTP协议的不同方法（GET、POST、PUT、DELETE等）来表示表资源的增删改查，并使用HTTP状态码来代表不同的结果。因此在RESTful设计中，一个资源通常由URL、HTTP方法和请求/响应体三部分组成。

详见 Java Ecosphere>Plugins>fastJSON for Alibaba

**二、接口要求：**

- 接口需要做认证。

- 接口需要无状态，不能依赖于会话（session）



**三、统一前缀：**

    推荐接口都以/api开头，便于统一处理。

**四、分页及排序：**

- 在URL中增加pageSize和pageNum参数用于分页。
- 在URL中增加sort参数用于排序，默认正序，带-表示倒序。比如：/api/v1/users?sort=-create_user,create_time 代表create_user倒序，create_time正序。
- 返回的分页数据中，在响应全中，包含如下元素：
  pageSize(和请求值一样)
  pageNum(和请求值一样)
  total（能查出的总记录数）,注：total非必须，可以不传，以提高性能。
  data（此次分页的数据）

**五、请求体(Request body)：**

- 文件上传采用multipart/form-data格式。
- 其它请求均采用application/json格式，不得使用application/x-www-form-urlencoded

**六、响应状态码（Response status）：**

    如无必要，勿增实体。凡是HTTP Response Status能表述的，均使用HTTP的响应状态码。

- 2XX



```undefined
- 200 : 请求成功，响应体中带有资源的数据。
- 201 : 资源创建成功。
- 202 : 请求已接收。对于耗时较长的需要后台异步处理的，服务在接收请求后，返回202。
- 204 : 响应中无内容。通常是在执行PUT、POST、DELETE后，不返回资源的内容。
```

- 3XX



```dart
- 301 : 如果接口废弃，迁移到新接口中，可以返回301重定向。
- 304 : 资源未修改。和204一样，在响应体中不会带有内容，其区别在于如果针对请求头中的If-Modified-Since或者If-None-Match指定的版本，资源没有修改，则返回304。
```

- 4XX



```undefined
- 400 ： 错误请求。通用的客户端错误状态码。通常是由于参数不正确。
- 401 ： 未授权。客户端未能提供有效的认证信息。
- 403 ： 请求被拒绝。客户端已经认证成功，但是无权访问该资源。
- 404 ： 资源不存在。
- 410 ： 如果接口永久废弃不用，可返回410。请慎用。
- 429 ： 请求次数超限。
```

- 5XX



```undefined
- 500 ： 服务器内部错误
```

### 七、响应头（Response headers）

    Content-Type需要与数据保持一致，POJO类的数据统一采用application/json;charset=UTF-8做Content-Type。

### 八、响应体（Response body）

   除文件下载外，响应体均采用JSON格式，JSON不要进行格式化。针对4XX错误和5XX错误，需要提供有供的信息，格式如下：



```json
{
  "code":"",
  "message":""
}
```

### 九、认证

   外部系统（服务）调用接口时采用oauth2.0的client_credentials方式进行认证。



作者：justDo1T
链接：https://www.jianshu.com/p/b8f7ace01487
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


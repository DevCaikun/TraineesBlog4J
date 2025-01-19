---
sidebar_position: 1
---

# RabbitMQ

### Start

#### 1.IDEA:Shell Script

``` ABAP
Script path: D:\DevelopmentKit\RabbitMQV31116\rabbitmq_server-3.11.16\sbin\rabbitmq-server.bat
working directory: E:/DevelopmentKitData/JetBrains/IDEA/Projects/MuyiMall

启动: D:\DevelopmentKit\RabbitMQV31116\rabbitmq_server-3.11.16\sbin>rabbitmq-server.bat -detached
停止: D:\DevelopmentKit\RabbitMQV31116\rabbitmq_server-3.11.16\sbin>rabbitmq-service stop

控制台地址:http://localhost:15672
默认账号密码:guest

docker拉取镜像: docker pull rabbitmq:3.13.4-management
docker运行:docker run --name rabbitmq3.13.4 -p 5672:5672 -p 15672:15672 -d rabbitmq:3.13.4-management
        
docker run -d -p 15673:15672 -p 5674:5672 --restart=always -e RABBITMQ_DEFAULT_VHOST=my_vhost -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin123456 --hostname myRabbit --name rabbitmq3.13.4
```

### WindowsDocker



```shell
# 拉取 RabbitMQ 镜像,在终端中运行以下命令来下载 RabbitMQ 镜像：
docker pull rabbitmq:3.13.4-management
# 运行一个kafka容器
	# 在Windows的 D:\DevelopmentKit\Docker.md\rabbitmq 目录中创建 docker-compose.yml 文件编辑内容如下：
  	version: '3'
    services:
      rabbitmq:
        image: rabbitmq:3.13.4-management
        ports:
          - "15672:15672"  # 管理插件 Web UI 端口
          - "5672:5672"    # AMQP 端口
        environment:
          RABBITMQ_DEFAULT_USER: user
          RABBITMQ_DEFAULT_PASS: password
	# cmd 命令进入 D:\DevelopmentKit\Docker.md\rabbitmq 目录执行如下命令:
	docker-compose up -d
# 打开浏览器访问 RabbitMQ 管理控制台
http://localhost:15672
# 登录 RabbitMQ 管理控制台：
默认用户名和密码是 user 和 password（可以在 docker-compose.yml 文件中修改）。
# 创建队列
    # 在 RabbitMQ 管理控制台中：
    点击 "Queues" 标签。
    # 在 "Add a new queue" 部分中，输入队列名称（例如 test-queue）。
    点击 "Add queue" 按钮。
# 发送消息（生产者）
	# 进入 Kafka 容器：
    cd D:\DevelopmentKit\Docker\rabbitmq # 打开新的dos命令终端先进入到配置文件目录
    docker-compose exec rabbitmq bash
    # 运行 Kafka 控制台生产者-并指定主题
    # 运行以下 Python 脚本来发送消息：
    首先，确保您安装了 pika 库：
    pip install pika
    创建一个名为 send.py 的文件，内容如下：
    import pika
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()
    channel.queue_declare(queue='test-queue')
    channel.basic_publish(exchange='', routing_key='test-queue', body='Hello RabbitMQ!')
    print(" [x] Sent 'Hello RabbitMQ!'")
    connection.close()
    # 运行脚本：
    python send.py
# 接收消息（消费者）
    # 运行以下 Python 脚本来接收消息：
    创建一个名为 receive.py 的文件，内容如下：
    import pika
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()
    channel.queue_declare(queue='test-queue')
    def callback(ch, method, properties, body):
        print(" [x] Received %r" % body)
    channel.basic_consume(queue='test-queue', on_message_callback=callback, auto_ack=True)
    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()
    # 运行脚本：
    python receive.py
```



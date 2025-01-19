---
sidebar_position: 4
---

# Kafka



### WindowsDocker

#### **Kafka2.8版本以后**

从 Kafka 2.8 版本开始，Kafka 已经逐步移除了对外部 Zookeeper 的依赖，因此在新版 Kafka 中不再需要额外安装和管理独立的 Zookeeper 实例。相反，Kafka 服务器现在内置了对元数据的存储和管理，这意味着 Kafka 可以自行管理其集群的状态信息，而不再依赖于外部的 Zookeeper。

具体来说，Kafka 2.8 及更高版本引入了 KRaft（Kafka Raft Metadata）协议，该协议允许 Kafka 使用 Raft 一致性协议来管理其元数据，如主题、分区、消费者组等信息。这种内置的元数据存储方案使得 Kafka 集群在运行时更为简化，减少了对外部 Zookeeper 的依赖，同时提高了系统的可靠性和性能。

因此，如果你正在使用 Kafka 2.8 或更新的版本，你可以直接启动 Kafka 服务器而无需单独安装和管理 Zookeeper。启动 Kafka 后，它将负责管理和维护所需的元数据，并通过内部的 KRaft 协议保持元数据的一致性和可靠性。

总结来说，新版 Kafka 不再需要额外安装和管理独立的 Zookeeper，这一改变简化了 Kafka 集群的部署和维护过程。

```shell
# 下载一个kafka镜像
docker pull bitnami/kafka:3.7.1
# 运行一个kafka容器
	# 在Windows的 D:\DevelopmentKit\Docker.md\kafka 目录中创建 docker-compose.yml 文件编辑内容如下：
  	version: '3'  # 推荐使用版本3
    services:
      zookeeper:
        image: zookeeper:3.9.2
        container_name: kafka:3.7.1  # 指定容器名称
        environment:
          - ALLOW_ANONYMOUS_LOGIN=yes
        ports:
          - '2181:2181'
      kafka:
        image: bitnami/kafka:3.7.1
        environment:
          - KAFKA_BROKER_ID=1
          - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181
          - ALLOW_PLAINTEXT_LISTENER=yes
        ports:
          - '9092:9092'
        depends_on:
          - zookeeper
	# cmd 命令进入D:\DevelopmentKit\Docker.md\kafka目录执行如下命令:
	docker-compose up -d
# 连接进入到运行中的 Kafka 容器
docker-compose exec kafka bash
# 创建 test-topic 主题：
kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test-topic
# 证主题创建 列出所有主题：
kafka-topics.sh --list --bootstrap-server localhost:9092
# 生产消息
    # 进入 Kafka 容器：
    cd D:\DevelopmentKit\Docker\kafka # 打开新的dos命令终端先进入到配置文件目录
    docker-compose exec kafka bash
    # 运行 Kafka 控制台生产者-并指定主题
    kafka-console-producer.sh --broker-list localhost:9092 --topic test-topic
    # 推送消息 发送任意字符串即可
    This is a test message. Another message.
    This is a test message.
Another message.
# 消费消息
	 # 进入 Kafka 容器：
    cd D:\DevelopmentKit\Docker\kafka # 打开新的dos命令终端先进入到配置文件目录
    docker-compose exec kafka bash
    # 运行 Kafka 控制台消费者-并指定主题
	kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-topic --from-beginning
	# 接收消息
	推送了就会显示出来
	
# 使用代码示例:
    # 如果希望使用代码编写 Kafka 生产者和消费者，以下是使用 Python 的示例。您需要安装 kafka-python 库：
    pip install kafka-python
    # Python 生产者示例
    from kafka import KafkaProducer
    producer = KafkaProducer(bootstrap_servers='localhost:9092')
    # 发送消息
    producer.send('test-topic', b'This is a test message')
    producer.send('test-topic', b'Another message')
    # 确保消息发送完成
    producer.flush()
    # 关闭生产者
    producer.close()
    # Python 消费者示例
    from kafka import KafkaConsumer
    consumer = KafkaConsumer(
        'test-topic',
        bootstrap_servers='localhost:9092',
        auto_offset_reset='earliest',
        enable_auto_commit=True,
        group_id='my-group')
    # 接收消息
    for message in consumer:
        print(f"{message.offset}: {message.value.decode('utf-8')}")
```

#### Kafka2.8版本以前

[参考]:https://blog.csdn.net/m0_64210833/article/details/134199061

```shell
# 下载一个kafka镜像
docker pull bitnami/kafka:2.6.1

# 运行一个kafka容器
docker run -d --name kafka2.6.1 -p 9092:9092 --link zookeeper3.9.2:zookeeper3.9 --env KAFKA_ZOOKEEPER_CONNECT=zookeeper3.9:2181 --env KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 --env KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 --env KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 bitnami/kafka:3.7.1
# --name kafka2.6.1: 设置容器的名字为“kafka2.6.1”。
# -p 9092:9092: 将容器的9092端口映射到宿主机的9092端口。
# --link zookeeper3.9.2:zookeeper3.9: 连接到名为“zookeeper3.9.2”的另一个Docker容器，并且在当前的容器中可以通过zookeeper3.9这个别名来访问它。
# --env KAFKA_ZOOKEEPER_CONNECT=zookeeper3.9:2181: 设置环境变量，指定ZooKeeper的连接字符串。
# --env KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092: 设置环境变量，指定Kafka的advertised listeners。
# --env KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092: 设置环境变量，指定Kafka的listeners。
# --env KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1: 设置环境变量，指定offsets topic的副本因子。
# bitnami/kafka:3.7.1: 使用的Docker镜像名字
#  确保在运行这个命令之前ZooKeeper容器已经在运行，并且可以通过zookeeper:2181来访问。如果ZooKeeper容器有一个不同的名字或者你使用的是不同的网络设置，你需要相应地调整--link和KAFKA_ZOOKEEPER_CONNECT的值。

# 进入Kafka容器
docker exec -it kafka2.6.1 /bin/bash
#  注意：可能出现报错：Error response from daemon: Container62b9c056c0aa9d6ba917690abae1c6fe16c750a96fe428cdaa43f4c692a146ca is not running 说明kafka并没有运行。

# 创建测试主题，在Kafka容器中，运行以下命令创建一个测试主题
kafka-topics.sh --create --topic test --partitions 1 --replication-factor 1 --zookeeper zookeeper3.9:2181

# 执行创建生产者命令：
kafka-console-producer.sh --broker-list localhost:9092 --topic test

# 在另一个终端窗口中，创建一个消费者来读取测试主题的消息（也需要进入kafka容器哈），执行创建消费者命令：
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning

# 如果一切设置正确，你应该能在消费者终端中看到你在生产者终端输入的消息。 

```









---
sidebar_position: 4
---

# RocketMQ

```ABAP
安装测试: http://chanpinxue.cn/archives/6285.html (Windows)
基本资料: https://blog.csdn.net/m0_60875109/article/details/126154034
错误解决: https://blog.csdn.net/lovebosom/article/details/126527191
```

### Start

#### IDEA Start (Shell Script)

```ABAP
Script path: D:\DevelopmentKit\RabbitMQV31116\rabbitmq_server-3.11.16\sbin\rabbitmq-server.bat
working directory: E:/DevelopmentKitData/JetBrains/IDEA/Projects/MuyiMall

控制台地址:
默认账号密码:
```

#### Shell Start

```ABAP
# 1.启动NameServer
nohup sh bin/mqnamesrv &
# 2.查看启动日志
tail -f ~/logs/rocketmqlogs/namesrv.log

# 1.启动Broker
nohup sh bin/mqbroker -n localhost:9876 &
# 2.查看启动日志
tail -f ~/logs/rocketmqlogs/broker.log 
```

#### 发送信息

```ABAP
# 1.设置环境变量
export NAMESRV_ADDR=localhost:9876
# 2.使用安装包的Demo发送消息
sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer
```

#### 接收消息

```ABAP
# 1.设置环境变量
export NAMESRV_ADDR=localhost:9876
# 2.接收消息
sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer
```

#### 关闭MQ

```ABAP
# 1.关闭NameServer
sh bin/mqshutdown namesrv
# 2.关闭Broker
sh bin/mqshutdown broker
```









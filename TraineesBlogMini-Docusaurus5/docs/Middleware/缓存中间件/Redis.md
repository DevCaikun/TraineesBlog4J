---
sidebar_position: 4
---

# Redis7
数据以键值对的形式存储，适合快速读写。


### WindowsDocker安装

首先得安装DockerDesktop

````shell
### 步骤一：下载并安装Docker Desktop

首先，需要下载并安装Docker Desktop。可以在[Docker官网](https://www.docker.com/products/docker-desktop)上找到适用于您操作系统的安装文件，并按照指示进行安装。

### 步骤二：拉取Redis镜像

在安装好Docker Desktop后，打开终端或命令行窗口，执行以下命令来拉取Redis镜像：

```bash
docker pull redis:7.2.5
```

这条命令将会从Docker Hub上下载最新的Redis镜像到本地。

### 步骤三：运行Redis容器

接下来，可以通过以下命令来运行Redis容器：

```bash
docker run --name redis7.2.5 -d -p 6379:6379 redis:7.2.5
```

这里的参数解释如下：
- `--name my-redis`：给容器取一个名称，这里取名为my-redis，方便识别和管理
- `-d`：使容器在后台运行
- `-p 6379:6379`：映射本地端口6379到容器内的6379端口，可以通过本地端口访问Redis服务
- `redis`：指定要运行的镜像为Redis

现在，已经成功运行了一个Redis容器。可以通过以下命令来查看运行中的容器列表：

```bash
docker ps
```

如果一切顺利，应该能看到名为my-redis的容器在运行状态。

到这里，已经成功在Docker Desktop中安装并运行了Redis。可以通过访问`localhost:6379`来连接Redis服务，并开始使用Redis存储数据了。
````



### LinuxDocker安装

拉取Redis镜像

``` shell
docker pull redis:6.2.6

镜像:版本 , 不指定版本则默认最新版
```

```shell
mkdir -p /data/redis/conf
mkdir -p /data/redis/data
mkdir -p /data/redis/logs
```

创建my.cnf文件，放在 /data/mysql/conf 目录中(注意配置文件中的端口号)

```shell
vim /data/redis/conf/redis.conf
```

```shell
# bind 192.168.1.100 10.0.0.1
# bind 127.0.0.1 ::1
# bind 127.0.0.1

protected-mode no

port 6379

tcp-backlog 511

requirepass root

timeout 0

tcp-keepalive 300

daemonize no

supervised no

pidfile /var/run/redis_6379.pid

loglevel notice

logfile ""

Databases 30

always-show-logo yes

save 900 1
save 300 10
save 60 10000

stop-writes-on-bgsave-error yes

rdbcompression yes

rdbchecksum yes

dbfilename dump.rdb

dir ./

replica-serve-stale-data yes

replica-read-only yes

repl-diskless-sync no

repl-disable-tcp-nodelay no

replica-priority 100

lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no

appendonly yes

appendfilename "appendonly.aof"

no-appendfsync-on-rewrite no

auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb

aof-load-truncated yes

aof-use-rdb-preamble yes

lua-time-limit 5000

slowlog-max-len 128

notify-keyspace-events ""

hash-max-ziplist-entries 512
hash-max-ziplist-value 64

list-max-ziplist-size -2

list-compress-depth 0

set-max-intset-entries 512

zset-max-ziplist-entries 128
zset-max-ziplist-value 64

hll-sparse-max-bytes 3000

stream-node-max-bytes 4096
stream-node-max-entries 100

activerehashing yes

hz 10

dynamic-hz yes

aof-rewrite-incremental-fsync yes

rdb-save-incremental-fsync yes

```

启动redis容器

```shell
docker run --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6379:6379 --name redis6 -v /data/redis/conf/redis.conf:/etc/redis/redis.conf -v /data/redis/data:/data -d redis:6.0 redis-server /etc/redis/redis.conf  --appendonly yes  --requirepass root

参数说明
–restart=always 总是开机启动
–log是日志方面的
-p 6379:6379 将6379端口挂载出去
–name 给这个容器取一个名字
-v 数据卷挂载/data/redis/conf/redis.conf:/etc/redis/redis.conf 这里是将liunx路径下的redis.conf和redis下的redis.conf挂载在一起。
/data/redis/data:/data 同上
-d redis 表示后台启动redis
redis-server /etc/redis/redis.conf 以配置文件启动redis，加载容器内的conf文件，最终找到的是挂载的目录 /etc/redis/redis.conf 也就是liunx下的/data/redis/conf/redis.conf
–appendonly yes 开启redis 持久化
–requirepass root 设置密码 （如果你是通过docker 容器内部连接的话，就随意，可设可不设。但是如果想向外开放的话，一定要设置，我被搞过，可以看这篇文章“阿里云服务器中毒‘Kirito666’经历”）
成功界面
```

设置开机启动

```shell
docker update redis6 --restart=always #设置镜像开机自启动
```

进入redis容器

````shell
docker exec -it redis6 /bin/bash
````

验证密码

```shell
auth password
```

查看redis版本

```shell
redis-server -v
```

查看当前redis设置的密码

```shell
config get requirepass
```

停止redis容器：docker stop 容器名

```shell
docker stop redis6 # redis6 是我启动redis 命名的别
```

删除容器命令：docker rm 容器名

```shell
docker rm redis6
```



### LInux安装

```shell

```





### IDEA:Shell Script

``` ABAP
Script path:D:\DevelopmentKit\Redis-x64-5.0.10\redis-server.exe
默认端口:6379
```



### Download

``` 

```

### Configuration

```yaml

```

### Start

#### Windows

```ABAP

```

#### Linux

```ABAP

```

#### IDEA:Shell Script

``` ABAP
Script path:D:\DevelopmentKit\Redis-x64-5.0.10\redis-server.exe
Working directory:E:/DevelopmentKitData/JetBrains/IDEA/Projects/MuyiMall
```

## 





---
sidebar_position: 4
---

# MySQL5.7
开源关系型数据库管理系统，广泛应用于 Web 应用程序开发。

### Docker启动

```shell
# 安装参考8.0或Docker
docker run -d \
--name mysql57 \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=DevCaikun666 \
mysql:5.7 # 5.7简单运行

# 复制 MySQL 容器中配置文件到宿主机	
mkdir -p /docker/mysql57

# 将容器中的 mysql 配置文件复制到宿主机中指定路径下
docker cp mysql57:/etc/mysql /docker/mysql57/config

docker stop mysql57 # MySQL 容器停止
docker rm -f mysql57 # MySQL 容器删除掉

docker run -d \
--name mysql57 \
-p 3306:3306 \
-v /docker/mysql57/config:/etc/mysql \
-v /docker/mysql57/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=DevCaikun666 \
mysql:5.7 # 5.7挂载运行
	# -v /docker/mysql/config:/etc/mysql: 将宿主机中 /docker/mysql/config 配置文件目录挂载到容器中的 /etc/mysql 目录上 ；
	# -v /docker/mysql/data:/var/lib/mysql: 将宿主机中的 /docker/mysql/data 数据存储目录挂载到 /var/lib/mysql 目录上 ；
```





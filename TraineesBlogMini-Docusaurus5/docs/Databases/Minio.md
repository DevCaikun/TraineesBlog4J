---
sidebar_position: 2
---

# Minio
Minio 不属于传统意义上的数据库，而是一个对象存储服务器。对象存储是一种用于存储和检索大量非结构化数据（例如文件、图片、视频等）的数据存储模型。Minio 主要用于创建和管理私有云存储服务，允许用户通过标准的存储接口（如Amazon S3 API）来访问和操作存储的数据。

具体来说，Minio 提供了一个分布式的对象存储系统，允许用户在标准硬件上运行，而不需要依赖特定的硬件设备或专业存储设备。它不存储结构化数据，也不提供传统数据库的功能，如SQL查询、索引或事务处理。相反，Minio 主要关注在大规模存储上的可扩展性、高可用性和数据安全性。

因此，Minio 可以被看作是一个对象存储服务器或分布式存储系统，而不是传统的关系型数据库或NoSQL数据库。

### Docker for Linux安装
```shell
# 拉取一个minion镜像
docker pull minio/minio:RELEASE.2024-11-07T00-52-20Z
````
创建挂载目录
``` shell
mkdir -p /docker/minio/datas
```
确保该目录的权限允许 Docker 容器访问。可以尝试更改目录的权限，确保它对 Docker 容器可写：
```shell
sudo chown -R 1001:1001 /docker/minio/datas
sudo chmod -R 755 /docker/minio/datas
```

如果不是 root 用户运行 Docker，需要重新启动 Docker 服务并确保它以 root 权限启动：
```shell
sudo systemctl restart docker
```
# 创建一个minio容器 方式一
docker run -d -p 9000:9000 -p 9090:9090 --name Minio -v /docker/minio/datas:/data -e "MINIO_ROOT_USER=DevCaikun" -e "MINIO_ROOT_PASSWORD=DevCaikun666" minio/minio:RELEASE.2024-11-07T00-52-20Z server /data --console-address ":9090"
# 创建一个minio容器 方式二
docker run -p 9000:9000 -p 9090:9090 --name Minio -v /docker/minio/datas:/data -e "MINIO_ROOT_USER=DevCaikun" -e "MINIO_ROOT_PASSWORD=DevCaikun666" minio/minio:RELEASE.2024-11-07T00-52-20Z server /data --console-address ":9090"
```

### Docker Desktop for Windows安装
```shell
# 拉取一个minion镜像
docker pull minio/minio:RELEASE.2024-11-07T00-52-20Z

# 创建一个minio容器 方式一
docker run -d -p 9000:9000 -p 9090:9090 --name Minio -v /docker/minio/datas:/data -e "MINIO_ROOT_USER=DevCaikun" -e "MINIO_ROOT_PASSWORD=DevCaikun666" minio/minio:RELEASE.2024-11-07T00-52-20Z server /data --console-address ":9090"
# 创建一个minio容器 方式二
docker run -p 9000:9000 -p 9090:9090 --name Minio -v /docker/minio/datas:/data -e "MINIO_ROOT_USER=DevCaikun" -e "MINIO_ROOT_PASSWORD=DevCaikun666" minio/minio:RELEASE.2024-11-07T00-52-20Z server /data --console-address ":9090"

```


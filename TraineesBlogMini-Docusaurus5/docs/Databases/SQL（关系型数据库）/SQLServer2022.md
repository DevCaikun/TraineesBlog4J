---
sidebar_position: 6
---

# SQLserver2022
由 Microsoft 提供的关系型数据库管理系统，适用于 Windows 平台。

### Docker for Linux安装

```shell 
# 拉取一个SQLserver2022镜像
docker pull mcr.microsoft.com/mssql/server:2022-latest

# 密码: 你在第3步中设置的密码
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=DevCaikun666" -p 1433:1433 --name SQLServer2022 -d mcr.microsoft.com/mssql/server:2022-latest
# 运行SQL Server容器
# -e "ACCEPT_EULA=Y" 表示接受Microsoft的最终用户许可协议。
# -e "SA_PASSWORD=970724@YMFdsg" 设置系统管理员账户(SA)的密码。请使用一个强密码。
# -p 1433:1433 将容器的1433端口映射到主机的1433端口，这样可以通过主机的端口访问SQL Server。
# --name SQLServer2022 设置容器的名称。
# -d 表示容器将以分离模式（detached mode）运行。
# 服务器名称: localhost 或者 127.0.0.1
# SA_PASSWORD: sa账号的密码 DevCaikun666

# 停止SQL Server容器:
docker stop SQLServer2022

# 启动SQL Server容器:
docker start SQLServerDev2022

# 删除SQL Server容器(需停止容器后再执行删除):
docker rm SQLServer2022

# 查看容器日志:
docker logs SQLServer2022
```

### Docker Desktop for Windows安装
```shell
# 拉取一个SQLserver2022镜像
docker docker pull mcr.microsoft.com/mssql/server:2022-latest

# 创建一个mysql8容器
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=DevCaikun666" -p 1433:1433 --name SQLServer2022 -d mcr.microsoft.com/mssql/server:2022-latest
```

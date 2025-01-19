---
sidebar_position: 3
---

# MySQL 8
开源关系型数据库管理系统，广泛应用于 Web 应用程序开发。

### Docker for Linux安装
```shell
# 拉取一个MySQL8镜像
docker pull mysql:8.0.39
```
查看下载的docker镜像
```crystal
[root@Rocky91-1 ~]# docker images
REPOSITORY                         TAG                 IMAGE ID            CREATED             SIZE
docker.io/mysql                    8.0.39              c60d96bd2b77        7 days ago          514 MB
```
创建挂载目录
``` shell
mkdir -p /data/docker/config
mkdir -p /data/docker/datas
mkdir -p /data/docker/logs
mkdir -p /data/docker/files
```
创建my.cnf文件，放在 /data/docker/config 目录中(注意配置文件中的端口号)
```shell
vim /data/docker/config/my.cnf

[client]
port = 3308
default-character-set = utf8mb4
 
[mysql]
port = 3308
default-character-set = utf8mb4
 
[mysqld]
# bind-address = 0.0.0.0
# port = 3306
 
max_connections=10000
 
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
 
# 设置时区和字符集
# default-time-zone='+8:00'
character-set-client-handshake=FALSE
init_connect='SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci'
 
gtid-mode=ON
enforce-gtid-consistency = ON
```
启动镜像
```shell
docker run  --restart=always  --name MySQL8  -v /data/docker/config:/etc/mysql/conf.d  -v /data/docker/datas:/var/lib/mysql  -v /data/docker/logs:/var/log  -v /data/docker/files:/var/lib/mysql-files -p 3306:3306  -e MYSQL_ROOT_PASSWORD='DevCaikun666'   -d mysql:8.0.39
    # 参数说明
    # -p 3306:3306：将容器的3306 端口映射到主机的3306 端口
    # -v /data/docker/config:/etc/mysql：将配置文件夹挂载到主机
    # -v /data/docker/logs:/var/log/mysql：将日志文件夹挂载到主机
    # -v /data/docker/datas:/var/lib/mysql/：将配置文件夹挂载到主机
    # -v /data/docker/files:/var/lib/mysql-files：将配其他文件夹挂载到主机
    # -e MYSQL_ROOT_PASSWORD=DevCaikun666：初始化root 用户的密码
    # -d mysql:8.0.39 ：镜像名称标签
```
维护命令
```shell
docker update MySQL8 --restart=always #设置镜像开机自启动
docker exec -it mysql8 bash # 进入MySQL容器
mysql -uroot -proot # 进入MySQL
exit # 退出MySQL与容器
docker exec -it NAMES mysql -uroot -proot # 查看MySQL版本 NAMES 如 ccdcccc8b81a status;
```

### Docker Desktop for Windows安装

#### 前置要求

1. **安装Docker Desktop**: 确保Docker Desktop已经安装并运行在你的Windows系统上。如果还没有安装，可以从Docker的官方网站下载并安装 Docker Desktop for Windows。
2. **创建Docker Hub账户**: 如果还没有Docker Hub账户，请创建一个，并确保你可以登录。

#### 安装步骤

1. **打开命令行工具**: 可以使用PowerShell、cmd或者Windows Terminal。

2. **拉取一个MySQL8镜像**: 执行以下命令来从Docker Hub拉取最新的MySQL镜像：

   ```shell
   docker pull mysql:8
   ```

3. **创建运行一个MySQL8容器**: 执行以下命令来运行MySQL容器。可以设置自定义的环境变量（例如MYSQL_ROOT_PASSWORD等）：

   ```shell
   # 方式一
   docker run -d --name MySQL8 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=DevCaikun666 mysql:8
   # 方式二
   docker run -d --name MySQL8 -e MYSQL_ROOT_PASSWORD=DevCaikun666 -p 3306:3306 -d mysql:8
   ```

   其中：

    - `--name MySQL8` 设置容器的名称。
    - `-e MYSQL_ROOT_PASSWORD=DevCaikun666` 设置root用户的密码。
    - `-p 3306:3306` 将容器的3306端口映射到主机的3306端口，这样可以通过主机的端口访问MySQL。
    - `-d` 表示容器将以分离模式（detached mode）运行。

4. **验证MySQL是否在运行**: 你可以运行以下命令来查看MySQL容器的运行状态：

   ```shell
   docker ps
   ```

   如果一切正常，你应该能够看到名为`mysql-container`的容器在运行。

5. **连接到MySQL**: 你可以使用MySQL Workbench、Navicat或其他MySQL客户端工具连接到你的MySQL实例。连接信息如下：

    - **主机名**: `localhost` 或者 `127.0.0.1`
    - **端口**: `3306`
    - **用户名**: `root`
    - **密码**: 你在第3步中设置的密码 (`YourPassword`)

#### 其他管理命令

- **停止MySQL容器**:

  ```shell
  docker stop MySQL8
  ```

- **启动MySQL容器**:

  ```shell
  docker start MySQL8
  ```

- **删除MySQL容器**: 停止容器后再执行删除命令。

  ```shell
  docker rm MySQL8
  ```

- **查看容器日志**:

  ```shell
  docker logs MySQL8
  ```

### 远程连接问题

mysql身份验证插件问题

```shell
错误号码2058
plugin caching_sha2_password could not be loaded

MySQL新版默认使用caching_sha2_password作为身份验证插件，而旧版是使用mysql_native_password。
当连接MySQL时报错“plugin caching_sha2_password could not be loaded”时，可换回旧版插件。

mysql -h -uroot -proot //进入数据库
use mysql;
ALTER USER root IDENTIFIED WITH mysql_native_password BY 'DevCaikun666'; //root是密码
FLUSH PRIVILEGES; #刷新


```

连接端口错误或容器映射端口错误

``` shell
错误号码2003
Can't connect to MySQL server on '192.168.111.131' (0)

参考docker启动mysql容器
```

```shell
错误号码1251
Client does not support authentication protocol requested by server

use mysql;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'DevCaikun666';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'DevCaikun666';
FLUSH PRIVILEGES;
```

### Linux9本地安装

#### DNF源安装

```shell
sudo dnf search mysql-server # 查看可安装的版本

sudo dnf install libaio # 可以自动从默认的软件源中下载并安装所需的库文件
sudo dnf install https://dev.mysql.com/get/mysql80-community-release-el9-1.noarch.rpm # 添加MySQL官方存储库
sudo dnf update # 更新软件包列表
sudo dnf install mysql-server # 安装MySQL
sudo systemctl start mysqld # 启动MySQL
sudo systemctl status mysqld # 验证MySQL安装
sudo systemctl enable mysqld # 设置开机启动
sudo mysql_secure_installation # 配置MySQL安全性(可选)
mysql -u root -p # 登录MySQL
# 清除yum缓存
sudo yum clean all
sudo yum clean packages
# 清除dnf缓存
sudo dnf clean all
sudo dnf clean packages
alter user "root"@"localhost" identified by "password"; # 修改密码
rpm -qa | grep mysql # 查看已安装,会看到类似于mysql-server-VERSION-RELEASE这样的输出

# 创建其他用户并允许其通过Navicat进行远程登录
CREATE USER '用户名'@'%' IDENTIFIED BY '密码'; # 创建新用户并设置密码（将用户名和密码替换为你想要设置的实际值）
ALTER USER '用户名'@'%' IDENTIFIED WITH mysql_native_password BY '新密码'; # 修改密码
GRANT ALL PRIVILEGES ON *.* TO '用户名'@'%' WITH GRANT OPTION; # 授予新用户在所有数据库上的全部权限
FLUSH PRIVILEGES; # 更改立即生效

sudo dnf remove mysql mysql-server # 卸载MySQ
```
#### RPM二进制软件包安装
```shell
# 获取下载链接
# 进入官网 https://dev.mysql.com/downloads/mysql/ 
# 选择 Select Version 为 8.1.0 Innovation
# 选择 Select Operating System 为 Linux-Rocky - Generic
# 找到 Windows (x86, 64-bit), MSI Installer 点击 Download
# 然后在浏览器下载进程中复制下载链接
sudo dnf install libaio # 可以自动从默认的软件源中下载并安装所需的库文件
sudo dnf install -y @development # 在 Rocky Linux-Rocky 上安装必要的构建工具和依赖项

# 创建一个用于存储安装包和源代码的目录，并进入该目录：
mkdir mysql81
mkdir downloads
cd downloads
# 源代码包的下载 # cd 到下载目录下 
wget https://cdn.mysql.com//Downloads/MySQL-8.1/mysql-8.1.0-linux-glibc2.28-x86_64.tar.xz
# 解压到指定目录并去除顶层目录
sudo tar -xvf mysql-8.1.0-linux-glibc2.28-x86_64.tar.xz -C /usr/local/mysql81 --strip-components=1
# 或解压到当前下载目录 # 然后移动到移动到/usr/local/mysql8.1目录
tar -xvf mysql-8.1.0-linux-glibc2.28-x86_64.tar.xz
sudo mv mysql-8.1.0-linux-glibc2.28-x86_64 /usr/local/mysql81

cd mysql81 # cd进入到解压目标目录

vim /etc/my.cnf # 编辑my.cnf文件
[mysqld]
basedir = /usr/local/mysql81 # MySQL 服务器的安装目录
datadir = /usr/local/mysql81/data # MySQL 数据库文件的存储目录
socket = /usr/local/mysql81/mysql.sock # MySQL 服务器的套接字文件路径
character-set-server=utf8 # 默认字符集编码
port = 3306 # 设置端口
# sql_mode 控制数据库的行为和规则
#NO_ENGINE_SUBSTITUTION 指定如果请求的存储引擎不可用，MySQL 不会自动替换为其他存储引擎
#STRICT_TRANS_TABLES 要求对于事务中的每个表修改都必须符合严格的模式，例如，禁止插入空值、超过字段长度等
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES 
lower_case_table_names=1 # 控制数据库对象（表、列等）名称的大小写处理方式, 1 表示将数据库对象名和表名都转换为小写
[client]
socket = /usr/local/mysql81/mysql.sock # 指定了 MySQL 连接时使用的套接字文件路径
default-character-set=utf8 # 默认使用utf8字符集编码

sudo mkdir -p /usr/local/mysql81/data # 创建并初始化MySQL数据目录,在安装MySQL之前需要初始化MySQL数据目录
# 创建 mysql 用户组和 mysql 用户 (mysql是名字可以自定义)
groupadd mysql  # 创建一个名为 mysql81 的系统用户组
useradd -g mysql mysql # 创建一个名为 mysql 的系统用户，并将该用户加入 mysql 用户组中
chown -R mysql.mysql /usr/local/mysql81/  # 将/usr/local/mysql81目录下的所有文件和目录的所有者设置为 mysql用户和 mysql组

# 使用mysqld命令初始化MySQL数据目录 # 注意: 这里要记录好自己的临时密码
sudo /usr/local/mysql81/bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql81 --datadir=/usr/local/mysql81/data

# 建立MySQL服务
sudo cp /usr/local/mysql81/support-files/mysql.server /etc/init.d/mysqld #复制 MySQL 启动脚本到 /etc/init.d/ 目录下，并重命名为 mysqld
chmod +x /etc/init.d/mysqld # 修改 /etc/init.d/mysqld 文件的权限
sudo chkconfig --add mysqld # 添加 mysqld 服务到系统服务列表,使其在系统启动时自动启动
sudo systemctl enable mysqld # 启用 mysqld 服务，使其在系统启动时自动启动
sudo chkconfig  --list mysqld # 检查 mysqld81 服务的运行状态
sudo chkconfig --list # 列出所有已添加到系统服务列表的服务及其状态

vi /etc/profile # 配置全局环境变量 编辑 / etc/profile 文件
# 在 profile 文件底部添加如下两行配置，保存后退出
export PATH=$PATH:/usr/local/mysql81/bin:/usr/local/mysql81/lib
export PATH
source /etc/profile # 设置环境变量立即生效,然后，重新加载配置文件或重新启动终端，使更改生效。

sudo chown -R mysql:mysql /usr/local/mysql81/data # 确保mysql用户对MySQL数据目录具有适当的读写权限
systemctl start mysql # 启动MySQL服务
systemctl stop mysql # 停止MySQL服务
systemctl status mysql # 查看MySQL服务状态

# 设置MySQL root密码,首次启动MySQL后，您需要设置root用户的密码,使用以下命令进入MySQL命令行：
mysql -uroot -p
# 在MySQL提示符下，运行以下命令设置root密码（将"your_new_password"替换为您想要的实际密码）
ALTER USER 'root'@'localhost' IDENTIFIED BY 'your_new_password';

# 设置可以远程登录
# 先登录mysql，在mysql里操作
use mysql # mysql是数据库名
update user set host='%' where user='root' limit 1;
# 刷新权限
flush privileges;
```

### Windows本地安装

#### 启动命令

```shell
# 启动停止
# Windows 按键 Win+X 点击 WindowsPowerShell(管理员) 打开进入命令行窗口才行:
net start mysql80 # 启动 mysql 8 
net stop mysql80 # 关闭 mysql 8
net start mysql57 # 启动 mysql 5.7 
net stop mysql57 # 关闭 mysql 5.7 
# Linux-Rocky :

```




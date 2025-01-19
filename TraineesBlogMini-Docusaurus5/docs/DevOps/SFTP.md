---
sidebar_position: 1
---

# SFTP

### CentOS 8.2搭建

在CentOS 8.2上搭建SFTP服务器可以通过OpenSSH实现。以下是详细步骤：

#### 1. 更新系统

确保系统是最新的：

```shell
sudo dnf update -y
```

#### 2. 安装OpenSSH服务器

如果尚未安装OpenSSH服务器，安装它：

```shell
sudo dnf install -y openssh-server
```

#### 3. 启动并启用SSH服务

启动SSH服务并设置开机自启动：

```shell
sudo systemctl start sshd
sudo systemctl enable sshd
```

#### 4. 创建SFTP用户

为SFTP创建一个新的用户：

```shell
sudo adduser sftpuser
sudo passwd sftpuser
```

#### 5. 创建SFTP目录结构

为用户创建SFTP目录并设置适当的权限：

```shell
sudo mkdir -p /home/sftpuser/upload
sudo chown root:root /home/sftpuser
sudo chmod 755 /home/sftpuser
sudo chown sftpuser:sftpuser /home/sftpuser/upload
```

#### 6. 配置OpenSSH

编辑SSH配置文件以配置SFTP：

```shell
sudo nano /etc/ssh/sshd_config
```

在文件末尾添加以下内容：

```shell
Match User sftpuser
    ForceCommand internal-sftp
    PasswordAuthentication yes
    ChrootDirectory /home/sftpuser
    PermitTunnel no
    AllowAgentForwarding no
    AllowTcpForwarding no
    X11Forwarding no
    # 设置默认目录
    ForceCommand internal-sftp -d /upload
```

#### 7. 重启SSH服务

保存并关闭文件后，重启SSH服务：

```shell
sudo systemctl restart sshd
```

#### 8. 测试SFTP连接

使用SFTP客户端（例如WinSCP或FileZilla）连接到服务器，测试是否可以正常访问和上传文件。

#### 9. 配置域名连接

配置完成后，您应该能够使用SFTP安全地传输文件到远程云服务器上的指定目录。

##### 1. 注册域名

首先，你需要注册一个域名。如果你已经有一个域名，可以跳过这一步。

##### 2. 配置DNS

将你的域名指向你的服务器IP地址。这通常是在你的域名注册商提供的DNS管理界面中完成的。你需要创建一个A记录，指向你的服务器的公共IP地址。

例如，如果你的服务器IP是 `192.0.2.123`，你的域名是 `example.com`，你可以添加如下A记录：

- 主机名（或子域名）： `@` 或 `www`
- 类型： `A`
- 值： `192.0.2.123`

##### 3. 验证DNS配置

DNS配置生效可能需要一些时间（通常是几分钟到48小时）。你可以使用以下命令来验证域名解析是否正确：

```shell
nslookup sftp.example.com
```

你应该看到你的域名解析到了你配置的IP地址。

##### 4. 配置防火墙

确保你的服务器防火墙允许SSH（SFTP）连接：

```shell
sudo firewall-cmd --add-service=ssh --permanent
sudo firewall-cmd --reload
```

##### 5. 连接SFTP服务器

使用SFTP客户端（例如WinSCP或FileZilla）连接到你的域名，而不是IP地址。

- 主机名： `example.com`
- 用户名： `sftpuser`
- 密码： 在前面步骤中设置的密码
- 端口： `22`（默认）

这样，你就可以通过域名连接到你的SFTP服务器了。


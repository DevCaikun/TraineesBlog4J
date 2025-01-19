---
sidebar_position: 1
---

# Docker for Linux

### 安装Docker

替换系统默认源(RockyLinux9.1)

```shell
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
	-e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl=https://mirrors.aliyun.com/rockylinux|g' \
	-i.bak \
	/etc/yum.repos.d/rocky-*.repo

dnf makecache  #更新缓存
```

安装yum工具

``` shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

替换yum默认软件源

``` shell
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

更新yum软件源

``` shell
yum makecache
```

下载docker

``` shell
sudo yum install -y --allowerasing docker-ce
```

启动docker

``` shell
sudo systemctl start docker
```

查看docker版本

``` shell
docker version
```

设置Docker开机启动

``` shell
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

添加用户名免sudo权限，并更新用户

``` shell
sudo gpasswd -a 用户名 docker
newgrp docker
```

设置docker国内aliyun镜像

``` shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://hub-mirror.c.163.com/",
        "https://oix2vuw6.mirror.aliyuncs.com",
        "http://registry.docker-cn.com",
        "http://docker.mirrors.ustc.edu.cn"
    ],
    "insecure-registries":[
        "docker.mirrors.ustc.edu.cn",
        "registry.docker-cn.com"
    ]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

配置阿里云镜像加速

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{"registry-mirrors": ["https://8wyqam7d.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

可选：安装Docker可视化工具(Portainer-ce)

``` shell
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest\

浏览器: https://local:9443
```

可选：安装docker-compose

``` shell
sudo yum install epel-release
sudo yum -y update
sudo yum -y install python-pip
sudo pip install -U docker-compose
```

重启docker

``` shell
sudo systemctl daemon-reload
sudo systemctl restart docker
```

修改镜像文件储存路径

``` shell
mkdir -p /data/server/docker

vim /usr/lib/systemd/system/docker.service

ExecStart=/usr/bin/dockerd --graph="/data/server/docker"
```

关闭docker开机启动

``` shell
sudo systemctl disable docker.service
sudo systemctl disable containerd.service
```

卸载docker

``` shell
sudo yum remove docker-ce docker-ce-cli containerd.io
```

启动Docker

```shell


```

# Docker Desktop for Windows

下载:https://www.docker.com/products/docker-desktop  
安装:  
设置:  
1.镜像源地址  
2.缓存位置冲C盘修改到其他盘  





### Docker通用命令

```shell
docker --version # 查看docker版本
sudo systemctl status docker # 查看docker启动状态
systemctl start docker # 启动docker
docker service docker stop / docker systemctl stop docker # 关闭docker
systemctl restart docker / service docker restart # 重启docker
systemctl list-unit-files | grep enable # 查看docker设置开机启动的选项
systemctl enable docker.service # 设置docker开机自启
systemctl disable docker.service # 关闭开机启动

# 切换docker镜像源
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo 

docker search mysql	# 搜索镜像
docker images -a # 查看已下载的镜像
docker rmi image id # 删除单个镜像
docker rmi image -f id # 强制删除单个镜像
docker rmi $(docker ps -a -q) #删除所有镜像

docker restart  容器ID或容器名 # 重启容器
docker start 容器ID或容器名 # 启动容器
docker stop 容器ID或容器名 # 停止容器
docker update id --restart=always #设置容器开机自启动
docker ps # 查看到正在运行的容器
docker ps -a # 查看运行和未运行的容器(容器即镜像的实例)
docker rm id # 删除单个容器
docker rm $(docker images -q) # 删除所有的容器

docker Systems prune -a # 删除所有 镜像和容器

docker save -o image.tar <镜像名称:标签> # 把镜像下载到Windows本地,不指定下载路径默认C:\ProgramData\Docker\windowsfilter
docker save -o E:\path\to\save\image.tar <镜像名称:标签> # 把镜像下载到Windows本地指定文件夹
docker save -o minio_image.tar minio/minio:RELEASE.2024-05-10T01-41-38Z # 把镜像下载到Linux本地,不指定下载路默认在 /root/文件夹
docker save -o /path/to/save/image.tar <镜像名称:标签> # 把镜像下载到Linux本地指定文件夹
docker load -i minio_image.tar #加载上传的镜像
```

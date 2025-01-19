---
sidebar_position: 1
---

# RockLinux9

### 基本命令

```shell
halt # 立刻关机
poweroff # 立刻关机
shutdown -h now # 立刻关机(root用户使用)
shutdown -h 10 # 10分钟后自动关机,如果是通过shutdown命令设置关机的话,可以用shutdown -c 命令取消重启
reboot # 重启命令
shutdown -r now # 立刻重启(root用户使用)
shutdown -r 10 # 过10分钟自动重启(root用户使用)  
shutdown -r 20:35 # 在时间为20:35时候重启(root用户)如果是通过shutdown命令设置重启则可用shutdown -c命令取消重启
ifconfig # 查看IP地址(Linux7以上的系统不适用)
hostname #查看主机名
hostname newname # 临时修改主机名为newname
hostnamectl set-hostname rocky91-1 # 永久修改主机名为rocky91-1
ip addr # 查看所有网络接口信息 (ip -a 同效)
clear # 清屏
vi # 文本编辑器 (ecs后: q! 该命令不论文件是否改变都会强行退出)
vi # 文本编辑器 (ecs后: :wq vi 将先保存文件，然后退出)
vi /etc/profile # 编辑环境变量
source /etc/profile # 生效环境变量
pwd # 查看当前所在完整路径

vi /etc/yum.conf # 查看包(软件)名是否在yum包管理器排除名单中
vi /etc/dnf/dnf.conf #查看包(软件)名是否在dnf包管理器排除名单中

hostname # 查看当前主机名
sudo hostnamectl set-hostname <new_hostname> # 修改主机名 请注意，需要重新启动系统才能使新主机名生效。
hostname # 验证新主机名

sudo systemctl status firewalld # 查看系统防火墙的状态（开启或关闭）
sudo firewall-cmd --list-ports # 查看防火墙开放的端口

# 防火墙类型
sudo ufw status # Ubuntu / Debian 查看防火墙启动状态 
sudo firewall-cmd --state # CentOS / Red Hat(包括RockyLinux/AlmLinux等)  查看防火墙启动状态
sudo firewall-cmd --zone=public --add-port=5432/tcp --permanent # 打开防火墙上的5432端口(Red Hat系列)
sudo firewall-cmd --reload # 重启生效
sudo firewall-cmd --list-ports # 查看防火墙开放的端口
sudo firewall-cmd --list-services # 查看某个特定服务已经打开的端口
```

### VIM

```shell
yum -y install vim* # 安装vim
```

### vi编辑器

```shell
# 在Vi编辑器中，要退出编辑模式并保存对文件的更改，可以按照以下步骤：
# 确保你处于命令模式。如果当前是插入模式（Insert mode），按下Esc键返回命令模式。
# 输入冒号（:）进入底行命令模式。
# 在底行命令模式中输入以下命令：
# 如果要保存更改并退出Vi编辑器，输入 wq 或 x，然后按回车键。
# 如果只想退出Vi编辑器而不保存更改，输入 q!，然后按回车键。
# 这样Vi编辑器就会退出，并根据你的选择保存或不保存对文件的更改。请注意，Vi编辑器执行命令时可能会显示一些状态消息或错误信息，请仔细观察并根据需要采取适当的操作
```

### RPM

```shell
# RPM(RPM Package Manager） 是一种常见的 二进制软件包格式 ，常见于基于 Red Hat 的 Linux-Rocky 发行版（如 Fedora、CentOS、Rocky Linux-Rocky）。使用 RPM 可以方便地安装、升级和删除软件包。 常用的 RPM 相关命令有 ：
rpm -ivh package.rpm # 安装一个 RPM 包
rpm -Uvh package.rpm # 升级一个 RPM 包
rpm -e package # 删除一个 RPM 包
rpm -qa # 列出已安装的 RPM 包
```

### DNF

```shell
sudo dnf install libaio # 可以自动从默认的软件源中下载并安装所需的库文件
```

### yum

```shell
# 检查所有已安装的软件包是否有可用的更新，如果有，它会下载并安装它们。
sudo yum update

# 只更新软件包列表而不安装更新
sudo yum makecach
```



### .tar

```shell
# tar 是一个 打包和压缩工具 ，它可以将多个文件和目录打包成一个单独的文件，并可以选择是否进行压缩。tar 打包的文件通常以 .tar 结尾，可以使用其他工具（如 gzip、bzip2）对其进行压缩，生成 .tar.gz 或 .tar.bz2 等压缩包,常用的 tar 相关命令有 ：
tar -cvf archive.tar file1 file2 directory # 创建一个只打包的 tar 文件
tar -czvf archive.tar.gz file1 file2 directory # 创建一个打包并压缩的 tar.gz 文件
tar -xvf archive.tar # 解压一个 tar 文件
tar -xzvf archive.tar.gz # 解压一个 tar.gz 文件
```



### 目录用途

```tex
/bin：存放系统中最基本的命令工具，如cat、ls等。
/boot：存放操作系统引导程序和内核文件等启动相关的文件。
/dev：存放系统中所有硬件设备的文件，包括硬盘、磁盘、键盘、鼠标等。
/etc：存放系统的配置文件，其中包括网络配置、用户配置、软件安装配置等。
/home：每个用户的主目录，用户可以在其中存储个人数据和文件。
/lib：系统所需的共享库文件，如动态链接库等。
/media：可移动媒体设备，如U盘、光盘等的挂载点。
/mnt：临时挂载点，系统管理员可以在此挂载新的文件系统。
/opt：用于存放第三方软件的安装目录，通常由软件开发商自己维护。
/proc：虚拟文件系统，用于提供内核和进程相关的信息，如CPU信息、内存信息等。
/root：超级用户root的主目录。
/run：运行时目录，存放系统运行时需要的临时文件。
/sbin：系统管理员使用的工具，如关机、重启等。
/srv：用于存放服务器应用程序的数据，如网站文件、FTP文件等。
/sys：虚拟文件系统，存放内核相关的信息。
/tmp：用于存放临时文件的目录，系统会定期清理其中的内容。
/usr：系统中大部分应用程序和文件的安装目录。
/var：存放系统日志文件、邮件、临时文件等可变的文件。

用户安装的软件通常存在于/usr/local目录下。该目录可以用于存放系统管理员或用户自行安装的软件，它与操作系统自带的软件包管理系统（例如RPM、yum、DNF）分开，以避免冲突。
在/usr/local目录下，通常会按照以下结构组织用户安装的软件：
/usr/local/bin：存放可执行文件，即用户可以直接在命令行中运行的程序。
/usr/local/include：存放头文件，用于软件开发时引用。
/usr/local/lib：存放库文件，即由软件共享的对象和动态链接库文件。
/usr/local/share：存放与软件相关的数据文件，如示例文件、文档、图标等。
/usr/local/man：存放帮助手册页面。
一般来说，用户通过源码编译安装软件时，可以选择将其安装到/usr/local目录下。不过，有些用户也可能选择将软件安装到其他自定义的目录，这取决于用户的需求和配置。

例如: 用户手动安装的MySQL通常会安装在/usr/local/mysql目录下。这是一个常见的约定和默认安装路径。
在/usr/local/mysql目录下，可以找到MySQL的二进制文件、配置文件、数据文件以及其他相关文件。具体而言，一些重要的子目录和文件包括：
/usr/local/mysql/bin：存放MySQL命令行工具和可执行文件，如mysql、mysqldump等。
/usr/local/mysql/data：存放MySQL的数据文件，包括数据库文件、日志文件等。
/usr/local/mysql/include：存放MySQL的C/C++头文件，用于开发MySQL相关应用程序。
/usr/local/mysql/lib：存放MySQL的库文件，包括静态库和动态共享库。
/usr/local/mysql/share：存放MySQL的共享数据和资源文件，如字符集配置文件、错误信息文件等。
/usr/local/mysql/support-files：存放MySQL的支持文件，包括示例配置文件、启动脚本等。
请注意，这仅是一种常见的安装布局，实际安装路径可能因个人喜好、操作系统或特定软件包提供的默认设置而有所不同。在安装MySQL之前，建议查阅相应的安装文档和指南，以了解正确的安装路径和最佳实践。
```







### RockyLinux 9

#### 常用命令

```shell
sudo dnf install libaio # 可以自动从默认的软件源中下载并安装所需的库文件
cat /etc/redhat-release # 查看操作系统版本
uname -r # 当前系统运行的内核版本
lshw # 显示详细的硬件信息，包括处理器、内存、磁盘驱动器等
uname -m # 查看系统的架构类型，如 x86_64（64位）、i386（32位）等
rpm -qa # 系统的架构类型，如 x86_64（64位）、i386（32位）等
sudo dnf upgrade --refresh -y # 保留配置文件的情况下升级系统中的所有软件包,包括操作系统核心、系统工具和其他应用程序,该命令会自动刷新软件包缓存并自动应答所有提示,确保升级过程无需人工干预.
sudo dnf -y upgrade # 升级系统中的所有软件包，包括操作系统核心、系统工具和其他应用程序,该命令会自动应答所有提示，并尝试更新所有可用的软件包版本.
sudo dnf update # 更新整个系统中的软件包，包括操作系统核心、系统工具和其他应用程序,系统将列出可用更新的软件包以及它们所需的依赖关系,然后您可以选择是否要继续进行更新操作.
sudo dnf update <package_name> # 指定要更新的软件包.





```



#### 查看包管理器

~~~shell
# 大多数基于 Red Hat 的 Linux-Rocky 发行版中,通过查看系统上的软件包管理二进制文件来确定是使用 DNF 还是 YUM 包管理器。
# 1.检查 /usr/bin/dnf 文件,如存在则表示您的系统正在使用 DNF 包管理器。
ls /usr/bin/dnf
# 2.检查 ls /usr/bin/yum 文件,如存在则表示您的系统正在使用 DNF 包管理器。
ls /usr/bin/yum

# DNF 是一个与 YUM 兼容且更加现代化的包管理器，已成为 Red Hat 系统中的主要包管理工具。

sudo dnf install dnf # 切换到 DNF
sudo dnf install yum # 切换到 YUM

dnf --version # 查看默认包管理器是不是 DNF,是则打印版本信息
yum --version # 查看默认包管理器是不是 YUM,是则打印版本信息

~~~

#### 查看已经安装哪些软件

```shell
# 对于基于 Red Hat 的系统（如 CentOS、Fedora）使用 DNF 或 YUM 包管理器：
dnf list installed 或 yum list installed # 查看所有已安装软件包
dnf list installed | grep package_name 或 yum list installed | grep package_name # 搜索特定软件包

# 对于基于 Debian 的系统（如 Ubuntu）使用 APT 包管理器：
dpkg -l # 查看所有已安装软件包
dpkg -l | grep package_name # 搜索特定软件包

# 对于基于 Arch 的系统（如 Arch Linux-Rocky）使用 Pacman 包管理器：
pacman -Q # 查看所有已安装软件包
pacman -Q | grep package_name # 搜索特定软件包

# 在执行这些命令时，会显示已安装软件包的列表，其中包含软件名称、版本号和其他相关信息。
# 另外，如果使用了其他的软件管理工具（例如 Snap、Flatpak 等），还可以通过它们提供的命令来查看已安装软件。建议根据使用的 Linux-Rocky 发行版和对应的包管理工具选择相应的命令进行查询。
```



### 远程连接问题

``` she
    
    
```

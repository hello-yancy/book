
# Docker 的安装和配置

---

## 1. Ubuntu 20.04 安装 OpenJDK

查看可用的 OpenJDK 版本

```bash
$ apt search openjdk
......

openjdk-8-doc/focal-updates,focal-updates,focal-security,focal-security 8u292-b10-0ubuntu1~20.04 all
  OpenJDK Development Kit (JDK) documentation

openjdk-8-jdk/focal-updates,focal-security 8u292-b10-0ubuntu1~20.04 amd64
  OpenJDK Development Kit (JDK)

openjdk-8-jdk-headless/focal-updates,focal-security 8u292-b10-0ubuntu1~20.04 amd64
  OpenJDK Development Kit (JDK) (headless)

......
```

安装 OpenJDK

```bash
$ sudo apt install openjdk-8-jdk
```

验证安装结果

```bash
$ java -version
openjdk version "1.8.0_292"
OpenJDK Runtime Environment (build 1.8.0_292-8u292-b10-0ubuntu1~20.04-b10)
OpenJDK 64-Bit Server VM (build 25.292-b10, mixed mode)
```

OpenJDK 被安装在 `/usr/lib/jvm` 目录，可以使用如下命令查看

```bash
$ tree -L 1 /usr/lib/jvm/
/usr/lib/jvm/
├── java-1.8.0-openjdk-amd64 -> java-8-openjdk-amd64
└── java-8-openjdk-amd64

2 directories, 0 files
```

当系统中安装了多个 JDK 版本是，可以使用如下命令切换版本

```bash
sudo update-alternatives --config java
sudo update-alternatives --config javac
```


## 2. 参考

[1] [Ubuntu 20.04 安装 Java OpenJDK](https://blog.csdn.net/xiaosaerjt/article/details/106033324)



sudo add-apt-repository "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu $(lsb_release -cs) stable"



tee /etc/docker/daemon.json <<-'EOF' 
{ 
"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"] 
} EOF




docker run -p 8080:8080 -p 50000:50000 -v jenkins_data:/var/jenkins_home jenkinsci/blueocean



sudo docker run -d -p 8090:8080 -p 50010:50000 jenkins/jenkins:lts


$ df -h
文件系统        容量  已用  可用 已用% 挂载点
udev            5.8G     0  5.8G    0% /dev
tmpfs           1.2G  1.8M  1.2G    1% /run
/dev/sdb1        30G  6.5G   22G   23% /
tmpfs           5.8G     0  5.8G    0% /dev/shm
tmpfs           5.0M  4.0K  5.0M    1% /run/lock
tmpfs           5.8G     0  5.8G    0% /sys/fs/cgroup
/dev/loop0       51M   51M     0  100% /snap/snap-store/547
/dev/loop1       66M   66M     0  100% /snap/gtk-common-themes/1515
/dev/loop3       33M   33M     0  100% /snap/snapd/12704
/dev/loop2       56M   56M     0  100% /snap/core18/2128
/dev/loop4      219M  219M     0  100% /snap/gnome-3-34-1804/72
/dev/sda3       969M   77M  827M    9% /boot
/dev/sdb3        69G  207M   65G    1% /home
tmpfs           1.2G  112K  1.2G    1% /run/user/1000




GnuTLS recv error (-110): The TLS connection was non-properly terminated.



$ git config --global user.name "hello-yancy"
$ git config --global user.email "yujd2000@sina.com"

$ git config --global http.sslVerify false




cat >>/etc/apt/sources.list <<EOF
deb http://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
EOF


Err:1 http://mirrors.ustc.edu.cn/ubuntu focal InRelease
  The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 3B4FE6ACC0B21F32 NO_PUBKEY 871920D1991BC93C


方法一：
gpg --keyserver keyserver.ubuntu.com --recv 871920D1991BC93C
gpg --export --armor 871920D1991BC93C | apt-key add -

方法二：
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 871920D1991BC93C


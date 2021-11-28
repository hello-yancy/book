
# JDK 的安装和配置

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

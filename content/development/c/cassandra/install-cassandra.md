# 1. Linux下安装Cassandra

## 1.1 下载并安装
从[Cassandra官网](http://archive.apache.org/dist/cassandra/3.11.3/)，下载安装包apache-cassandra-3.11.3-bin.tar.gz，并上传至Linux服务器`/usr/local/src`目录下，并执行以下安装命令

```bash
cd /usr/local/src
tar -C /usr/local -zxf apache-cassandra-3.11.3-bin.tar.gz
```

解压之后，目录下的文件如下：
```bash
cd /usr/local/src
tar -C /usr/local -zxf apache-cassandra-3.11.3-bin.tar.gz
```

## 1.2 配置环境变量
打开/etc/profile文件，并在该文件的底部增加如下内容
```bash
export CASSANDRA_HOME=/usr/local/apache-cassandra-3.11.3
export PATH=$CASSANDRA_HOME/bin:$PATH
```
执行`source /etc/profile`使配置生效

## 1.3 启动Cassandra
使用如下命令，以后台方式启动Cassandra：
```bash
$ cd /usr/local/apache-cassandra-3.11.3
$ cassandra
```
> 注：`cassandra -f`表示绑定到console

## 1.5 安装可视化工具DevCenter

# 2. Windows下安装Cassandra

## 2.1 下载并安装


注：验证方法参考Linux下的方法

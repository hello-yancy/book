
# 1. Linux下安装MonogoDB

## 1.1 下载并安装
从[MonogoDB](https://www.mongodb.com/download-center/community)的官网，下载安装包，并上传至后台 /usr/local/src 

```bash
cd /usr/local/src
sudo tar -xzf mongodb-linux-x86_64-ubuntu1604-4.2.3.tgz
sudo mv mongodb-linux-x86_64-ubuntu1604-4.2.3 /opt/mongodb
chmod 755 -R /opt/node
```

## 1.2 配置环境变量
打开/etc/profile文件，并在该文件的底部增加如下内容
```bash
export MONGODB_HOME=/opt/mongodb
export PATH=$MONGODB_HOME/bin:$PATH
```
执行`source /etc/profile`使配置生效

## 1.3 创建数据库目录

MongoDB的数据存储在 /data/db 目录下，但是这个目录在安装过程不会自动创建，所以需要手动创建
```bash
mkdir -p /data/db
```
> 注：/data/db 是 MongoDB 默认的启动的数据库路径；如果数据库目录不是/data/db，可以通过 --dbpath 来指定。

## 1.4 安装中的问题
在 `/opt/mongodb/bin` 下使用`./mongod`启动时，提示如下错误：
```bash
./mongod: /usr/lib/x86_64-linux-gnu/libcurl.so.4: version `CURL_OPENSSL_3' not found (required by ./mongod)
```

解决方法如下（见参考2）:
```bash
sudo apt-get remove --auto-remove libcurl4-openssl-dev
sudo apt-get install libcurl3 -y
```

# 2. Windows下安装MonogoDB

## 2.1 下载并安装
从[MonogoDB](https://www.mongodb.com/download-center/community)的官网，下载安装包，双击并安装



# 3. 参考
1. [Linux平台安装MongoDB](https://www.runoob.com/mongodb/mongodb-linux-install.html)
2. [Version `CURL_OPENSSL_3' not found](https://askubuntu.com/questions/1087576/version-curl-openssl-3-not-found)
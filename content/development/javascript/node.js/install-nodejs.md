---
title: 安装Node.js
date: 2019-07-06 17:24:32
tags: 
- Node.js
categories:
- 软件开发
- JavaScript
---

# 1. Linux下安装Node.js

## 1.1 下载并安装
从[Node.js](https://nodejs.org/en/)的官网，下载安装包node-v10.16.0-linux-x64.tar.xz，并上传至后台

```bash
cd /usr/local/src
xz -d node-v10.16.0-linux-x64.tar.xz
tar -xf node-v10.16.0-linux-x64.tar
mv node-v10.16.0-linux-x64 /opt/node
chmod 755 -R /opt/node
```

## 1.2 配置环境变量
打开/etc/profile文件，并在该文件的底部增加如下内容
```bash
export NODE_HOME=/opt/node
export PATH=$NODE_HOME/bin:$PATH
```
执行`source /etc/profile`使配置生效

## 1.3 验证安装结果
使用`node -v`和`npm -v`命令，验证安装是否成功，示例如下：
```bash
$ node -v
v10.16.0
$ npm -v
6.9.0
```

# 2. Windows下安装Node.js

## 2.1 下载并安装
从[Node.js](https://nodejs.org/en/)的官网，下载安装包node-v10.16.0-x64.msi，双击并安装

注：验证方法参考Linux下的方法

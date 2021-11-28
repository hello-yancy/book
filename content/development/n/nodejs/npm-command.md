# 1. 常用命令列表

|命令|格式|说明|
|--|--|--|
|查询版本|npm -v|--|
|安装模块（本地）|npm install &lt;Module Name&gt;|1.将安装包放在./node_modules下，如果没有<br/>node_modules目录，则会在当前目录下生成该目录<br/>2.可以通过 require() 来引入本地安装的包|
|安装模块（全局）|npm install &lt;Module Name&gt; -g|1.将安装包放在/usr/local下，或者Node.js的安装目录<br/>2.可以直接在命令行里使用|
|卸载模块|npm uninstall &lt;Module Name&gt;|--|
|更新模块|npm update &lt;Module Name&gt;|--|
|搜索模块|npm search &lt;Module Name&gt;|--|
|查看安装信息（全局）|npm list -g|npm list -g --depth 0|
|查看安装信息（模块）|npm list &lt;Module Name&gt;|--|


# 2. 参考文档

1. [NPM使用介绍](https://www.runoob.com/nodejs/nodejs-npm.html)
2. [npm常用命令](https://www.jianshu.com/p/7ea13d57638b)
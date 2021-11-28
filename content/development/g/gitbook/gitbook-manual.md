

# 1. 准备工作



# 2. 搭建 GitBook 工程

```bash
$ cd ~/workspace/gitbook/
$ git clone git@github.com:hello-yancy/book.git
$ cd book
$ gitbook install
$ gitbook npm install gh-pages --save-dev
$ gitbook serve
```


## 3. FAQ

### 3.1 问题1
【问题现象】
```bash
$ gitbook serve
Live reload server started on port: 35729
Press CTRL+C to quit ...

info: 7 plugins are installed 
info: 16 explicitly listed 

Error: Couldn't locate plugins "hide-element, chapter-fold, expandable-chapters-small, code, splitter, anchor-navigation-ex, pageview-count, tbfed-pagefooter, lightbox, github, insert-logo, search-pro, prism", Run 'gitbook install' to install plugins from registry.
```

【解决办法】
```bash
$ gitbook install
```

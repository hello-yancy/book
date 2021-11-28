

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

### 3.2 问题2
【问题现象】
```bash
node publish.js 
internal/modules/cjs/loader.js:638
    throw err;
    ^

Error: Cannot find module 'gh-pages'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at Object.<anonymous> (/home/yancy/workspace/book/publish.js:1:15)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
```

【解决办法】
```bash
$ gitbook install
```

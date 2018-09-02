## loader进阶

### loader初尝试

#### 编写一个最简单的loader

* 这里我们用webpack-loader实现一个功能，如何将后台给我们的jsonp请求的包体转化成一个对象。假设我们以.jsonp的后缀的文件类型存放jsonp包体。
* 我们的webpack 配置如下， 匹配.jsonp文件后缀，使用我们本地编写的loader.js
* loader.js如下，这里简单说下： jsonp包体相对js而言相当于一次函数调用，而调用的参数就是我们需要返回的对象，那么只要我们将包体中的函数定义。
* 运行结果如下 ( node   ../../node_modules/webpack-cli/bin/cli.js ./index.js --config ./webpack.config.js)

#### 使用loader的options传递参数

* webpack.config.js配置如下
* 使用loader-utils提供的getOptions获取参数
(ps. loader.js里面的this的常用方法： )

### loader进阶

#### loader的链式传递

* 传递顺序，callback方法
* lowcase-loader.js , jsonp-loader.js

### loader缓存

* 默认情况下，loader 的处理结果会被标记为可缓存。调用这个方法然后传入 false，可以关闭 loader 的缓存。

一个可缓存的 loader 在输入和相关依赖没有变化时，必须返回相同的结果。这意味着 loader 除了 this.addDependency 里指定的以外，不应该有其它任何外部依赖。

#### loader依赖

* 如果一个 loader 使用外部资源（例如，从文件系统读取），必须声明它。这些信息用于使缓存 loaders 无效，以及在观察模式(watch mode)下重编译。下面是一个简单示例，说明如何使用 addDependency 方法实现上述声明：

#### loader编写规范

* 简单易用。  
* 使用链式传递。
* 模块化的输出。
* 确保无状态。//不相互依赖
* 使用 loader utilities。
* 记录 loader 的依赖。
* 解析模块依赖关系。
* 提取通用代码。
* 避免绝对路径。
* 使用 peer dependencies。

## loader-utilities && loader-runner

### loader-utilities

#### loader-utils && schema-utils
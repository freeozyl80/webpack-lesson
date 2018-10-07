# 第十章 webapck高级用法及其核心模块

## Webpack 高级用法之source篇

### 所谓source map

我们在打包中，将开发环境中源代码经过压缩，去空格，babel编译转化，最终可以得到适用于生产环境的项目代码，这样处理后的项目代码和源代码之间差异性很大，会造成无法debug的问题。

举例来说，如果压缩等处理过的生产环境中的代码出现bug，调试的时候只能定位到压缩处理后的代码的位置，无法定位到开发环境中的源代码。

sourcemap就是为了解决上述代码定位的问题，简单理解，就是构建了处理前的代码和处理后的代码之间的桥梁。主要是方便开发人员的错误定位。这里的处理操作包括：

I）压缩，减小体积

II）将多个文件合并成同一个文件

III）其他语言编译成javascript，比如TypeScript和CoffeeScript等

### soucemap 使用


### soucemap 原理

实际上就是一个 JSON 键值对，利用 VLQ编码与特定的规则存储位置信息。

它是一个独立的map文件，与源码在同一个目录下

### sourcemap webpack

eval:

 * source-map

 * inline-source-map

* cheap-source-map

此外增加cheap后也不会有loader模块之间对应的sourcemap，什么是模块之间的sourcemap呢？

因为webpack最终会将所有的非js资源，通过loader的形式转变成js资源。比如jsx语言的操作分为：

jsx——（loader）——js——（压缩等处理）——压缩后的js

如果没有loader之间的sourcemap，那么在debug的时候定义到上图中的压缩前的js处，而不能追踪到jsx中。

* moudule

### webpack核心模块之 enhanced-resolve

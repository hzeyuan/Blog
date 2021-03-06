
----
### 1. 说说浏览器的缓存机制？
----

1. 通过expries和cache-control来设置强制缓存
2. 通过eTag和last-modified协商缓存。

缓存的位置：
* service Worker cache
* memory cache
* disk cache


----
### 2. 说说浏览器的渲染机制？
----




----
### 3. 常见的性能优化手段有哪些？
----
1. 尽可能的减少http请求。
2. 使用cdn进行缓存。
3. 使用gzip压缩图片css等资源
4. htmlwen文件中，先加载css在加载js。
5. 减少dns查询。

----
### 4. 前端性能指标有哪些？
----

* FCP:首次绘制内容的耗时
* TTI:是页面可交互的时间
* Page Load:页面完全加载时间
* FPS:前端页面帧率
* 静态资源及API 请求成功率
* TP（Top Percentile)


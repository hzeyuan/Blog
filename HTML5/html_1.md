
----
### 1.html5有哪些新特性？
-----<a id="p1">1、11111111111111</a>

1. 语义化标签:header、footer、section、nav、aside、article
2. 增强型form：
* input的多个type(color, date, datetime, email, month, number, range, search, tel, time, url, week)
* 新增表单元素：datalist、keygen、output
* 新增表单属性：placehoder, required, min和max, step, height 和 width, autofocus, multiple
3. 新增Canvas、SVG API。
4. 原生支持音频视频，audio、video
5. Geolocation：共享地理位置获取ip,经纬度。
6. 拖拽：新增drag API，属性和事件。
8. Web Storage API：sessionStorage(保存在session中，浏览器关闭，数据消失)、localStorage(保存在客户端本地，除非手动删除，否则一直保存)
9. Web Workers API：Web Workers可以让Web应用程序具备后台处理能力，对多线程的支持性非常好。但是在Web Workers中执行的脚本不能访问该页面的window对象，也就是Web Workers不能直接访问Web页面和DOM API。虽然Web Workers不会导致浏览器UI停止响应，但是仍然会消耗CPU周期，导致系统反应速度变慢。
10. 父与子窗口通信：postMessage方法和addEventListener("message",...)
11. WebSockets

----
### 2.localStorage，sessionStorage，cookie 的区别？
----

> 共同点
* 都是保存在浏览器端。

> 不同点：
#### 存储方式不同：
* cookie数据始终在同源的http请求中携带，
* sessionStorage和localStorage，仅在本地保存。
#### 存储大小限制也不同：
* cookie数据不能超过4k
* sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
#### 数据有效期不同：
* sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
* localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
* cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭;
#### 作用域不同：
* sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
* cookie，localStorage 在所有同源窗口中都是共享的；


----
### 3.DOCTYPE的作用
----

> DOCTYPE用来声明文档的类型为html,例如```<!DOCTYPE html>```浏览器会判断为html5类型，随之选择合适的协议来解析。

----
### 3.DOCTYPE的作用
----
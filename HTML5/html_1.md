
----
### 1.html5有哪些新特性？
-----

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

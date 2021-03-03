----
react 组件状态管理
----

-----
### 6. setState是同步更新还是异步更新？
-----

setState 并非真异步，只是看上去像异步。在源码中，通过 isBatchingUpdates 来判断
setState 是先存进 state 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新。

* 在 React 生命周期事件和合成事件中采用异步更新。
* 在原生事件addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新。

----
### 7. 为什么setState要异步呢？
----

1. state使用异步的好处是可以和props更新保持一直。
2. 为了性能优化、减少渲染次数

----
### 8. React中的跨组件通信
-----

> 组件和组件的关系大致可以分为以下几种
* ①父与子
* ②子与父
* ③兄弟
* ④无直接关系

```
①：通过props传递state的数据
②：子组件通过回调函数像父组件传递数据
③：兄弟组件之间依靠共同的父组件进行传递。
④：方式1：使用window全局变量，方式2:使用Context,方式3：状态管理框架(Redux,Flux,Mobx)
```

----

### 9. 列举一种熟悉的React状态管理工具
----


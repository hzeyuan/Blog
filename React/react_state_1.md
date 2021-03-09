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

* 传统的mvc:适用于小型项目，但当项目越来越大的时候，会因为model多多而难以维护。
* Flux：采用单向数据流， 
```
              action<------------------
                 |                     |
                 v                     |
action --> dispatcher --> store --> view
```
> Flux 包含了 4 个部分，分别是 Dispatcher、 Store、View、Action。Store 存储了视图层所有的数据，当 Store 变化后会引起 View 层的更新。如果在视图层触发一个 Action，就会使当前的页面数据值发生变化。Action 会被 Dispatcher 进行统一的收发处理，传递给 Store 层，Store 层已经注册过相关 Action 的处理逻辑，处理对应的内部状态变化后，触发 View 层更新。

* Redux:是Flux更简洁的实现方式
> 不同于flux的地方在于：
* 单一数据源、纯函数 Reducer、State 是只读的
* 没有了dispather,并且不再store处理对应状态变化逻辑，而是在store中通过调用dispath向特定的reducer传递action，reducer表现形式为:(preState,action) => newState，多个reducer会通过combineReducer方法合成一个跟reducer,这个跟reducer负责维护完整的state，在传递给view。

----

### 10. React中keys的作用是什么？
----

> key 是React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。


-----
### 11. redux 如何处理异步？
-----
* 使用异步中间件

----
### 12. 主流的异步中间件redux-thunk、redux-saga的优缺点和区别？
----

redux-thunk优点：

体积⼩：redux-thunk的实现⽅式很简单，只有不到20⾏代码；
使⽤简单：redux-thunk没有引⼊像redux-saga或者redux-observable额外的范式，上⼿简单。

redux-thunk缺陷：

样板代码过多：与redux本身⼀样，通常⼀个请求需要⼤量的代码，⽽且很多都是重复性质的；
耦合严重：异步操作与redux的action偶合在⼀起，不⽅便管理；
功能孱弱：有⼀些实际开发中常⽤的功能需要⾃⼰进⾏封装。

redux-saga优点：

异步解耦：异步操作被被转移到单独saga.js中，不再是掺杂在action.js或component.js中；
action摆脱thunk function: dispatch的参数依然是⼀个纯粹的 action (FSA)，⽽不是充满 “⿊魔法” thunk function；
异常处理：受益于 generator function 的saga实现，代码异常/请求失败都可以直接通过try/catch语法直接捕获处理；
功能强⼤：redux-saga提供了⼤量的Saga辅助函数和Effect创建器供开发者使⽤，开发者⽆须封装或者简单封装即可使⽤；
灵活：redux-saga可以将多个Saga可以串⾏/并⾏组合起来，形成⼀个⾮常实⽤的异步flow；
易测试，提供了各种case的测试⽅案，包括mock task，分⽀覆盖等等。

redux-saga缺陷：

额外的学习成本：redux-saga不仅在使⽤难以理解的generator function，⽽且有数⼗个API，学习成本远超reduxthunk，最重要的是你的额外学习成本是只服务于这个库的，与redux-observable不同，redux-observable虽然也有额外学习成本但是背后是rxjs和⼀整套思想；
体积庞⼤：体积略⼤，代码近2000⾏，min版25KB左右；
功能过剩：实际上并发控制等功能很难⽤到，但是我们依然需要引⼊这些代码；
ts⽀持不友好：yield⽆法返回TS类型。

----
### 13. 触发组件重新渲染的方法有哪些?
----

* setState被调用
* forceUpdate 
* 父组件重新渲染

----
### 14. setState的执行流程?
----

1.将setState传入的 partialState参数存储在当前组件实例的state暂存队列中。
2.判断当前React是否处于批量更新状态，如果是，将当前组件加入待更新的组件队列中。
3.如果未处于批量更新状态，将批量更新状态标识设置为true，用事务再次调用前一步方法，保证当前组件加入到了待更新组件队列中。
4.调用事务的 waper方法，遍历待更新组件队列依次执行更新。
5.执行生命周期 componentWillReceiveProps。
6.将组件的state暂存队列中的 state进行合并，获得最终要更新的state对象，并将队列置为空。
7.执行生命周期 componentShouldUpdate，根据返回值判断是否要继续更新。
8.执行生命周期 componentWillUpdate。
9.执行真正的更新， render。
10.执行生命周期 componentDidUpdate
----
react Hooks
----


----
### 1. 常用React Hooks方法?
----

* useState:保存组件状态

```
import React, { useState } from "react";
function App() {
  const [obj, setObject] = useState({
    count: 0,
    name: "alife"
  });
  return (
    <div className="App">
      Count: {obj.count}
      <button onClick={() => setObject({ ...obj, count: obj.count + 1 })}>+</button>
      <button onClick={() => setObject({ ...obj, count: obj.count - 1 })}>-</button>
    </div>
  );
}
```
* useEffect 处理副作用，比如异步请求，销毁定时器等。

```
import React, { useState, useEffect } from 'react';

import React, { useState, useEffect } from "react";
let timer = null;
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "componentDidMount" + count;
  },[count]);

  useEffect(() => {
    timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      document.title = "componentWillUnmount";
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      Count: {count}
      <button onClick={() => clearInterval(timer)}>clear</button>
    </div>
  );
}
```
* useContext：解决跨组件之间数据传递问题，避免多层级传递数据的方式。
> 以前:是创建createContext，ctx.provider和ctx.consumer, consumer写法比较复杂，同时存在嵌套问题。
> 使用useContext更简单直观。

```
const colorContext = React.createContext("gray");
function Bar() {
  const color = useContext(colorContext);
  return <div>{color}</div>;
}
function Foo() {
  return <Bar />;
}
function App() {
  return (
    <colorContext.Provider value={"red"}>
      <Foo />
    </colorContext.Provider>
  );
}
```
* useReducer:
```
import React, { useReducer } from "react";
const initialState = {
  count: 0
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        -
      </button>
    </>
  );
}
```
* useCallback: 在函数组件中使用useCallback包裹函数，可以减少一些常量等不必要的渲染，进行缓存，提高性能。

* useMemo: useMemo和useCallback相似，不同之处在于useMemo会执行后立刻返回，useCallback则是由用户选择时机调用。
```
function App() {
  const memoizedHandleClick = useMemo(() => () => {
    console.log('Click happened')
  }, []); // 空数组代表无论什么情况下该函数都不会发生改变
  return <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>;
}
```
* useRef:组件函数中存在capture value(值捕获)特性，捕获的值是确定安全的。那如果想要获取到最新的值怎么办？用useRef进行穿透，获取到最新的值。

```
function MessageThread() {
  const latestMessage = useRef("");

  const showMessage = () => {
    alert("You said: " + latestMessage.current);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = e => {
    latestMessage.current = e.target.value;
  };
}

```


----
### 2. React Hooks有哪些限制?
----
##### 回答
* 不要在循环，条件或嵌套函数中使用Hook
* 需要在React函数组件中使用Hook。

##### 原因
* 组件与组件之间难以复用
* 改善以前旧的开发模式，业务代码散落在各个生命周期中，耦合太深，难以解耦。

##### 避免
* 使用eslint等工具，避免人为犯错。


----
### 3. 简单说说React Hooks的设计模式?
----

* 因为React Hook出来的时间还算比较短，感觉还没有什么权威的设计，但在工作中会有一些自己的看法。
* 首先在使用Hooks，我们应该转变思想，抛弃生命周期的思考模式，从effects的角度思考。
* 将业务逻辑封装到自定义的Hook中，完成某一特定的功能，通过组合Hook来完成整个功能。


----
### 4. 你能说说为什么要用react hooks吗？
----

react hooks的发展，要从react对逻辑状态的复用说起
最初的mixins
* 使用mixins给组件赋予各种各样的功能。
* 缺点就是不用mixin之间互相依赖，当项目大的时候，方法之间可能会冲突，不方便维护。
到HOC高阶函数
* 高阶函数基本解决了mixins的问题。
* 使用装饰器的方式，方便表达
* 同时是纯函数，不会给组件带来副作用。
* 实现的方式一般两种，代理，或者反向继承，然后就可以实现渲染劫持，等功能，可以用来埋点，日志统计，登录管理等。
缺点
* 函数嵌套函数，不方便调试。
hooks:
* 相比HOC,把状态单独拎出来写成独立的hooks,方便测试和维护,通过组合的方式来实现逻辑状态的复用。

----
react 组件基础
----

### 3. React中的生命周期及注意的坑

> 挂载阶段
* constructor:初始化state与绑定函数，注意：不要引入业务逻辑,逐渐被类属性写法取代。
* getDerivedStateFromProps:
* componentWillMount:被标记废除。
* render: 返回描述渲染内容，返回JSX结构。注意：此函数不应该有副作用，例如调用setState或绑定事件，会造成死循环。
* componentDidMount:发起网络请求或者绑定事件。

> 更新阶段
* componentWillReceiveProps:标记废除。
* getDerivedStateFormProps:同挂载阶段一致
* shouldComponentUpdate:可以通过return true or false来判断是否需要触发渲染，常用于性能优化，也是PureComponent的实现原理。
* componentWillUpdate:标记废除
* render: 同挂载阶段一致
* componentDidUpdate:视图更新后，执行的操作，注意setState的使用。
> 卸载阶段
* componentWilUnmount:解除事件绑定，定时器清理等操作。


### 2. React生命周期的坑
> 概括：该用的时候不用，不该用的时候乱用。
* componentWillMount 在 React 中已被标记弃用，由于新的异步渲染机制会导致它被多次调用。
* componentWillReceiveProps:标记废除，被getDerivedStateFromProps取代。
* shouldComponentUpdate:通过return true or false,可以用于性能优化。
* componentWillUpdate：标记废弃，同样由于新的异步渲染机制,可以使用getSnapshotBeforeUpdate 与 componentDidUpdate代替。
* componentWillUnmount:忘记解除某些事件绑定或者清理操作。
* 没有使用componentDidCatch等错误边界处理：导致界面白屏。
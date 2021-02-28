----
react 组件基础
----

##### 回答
> 按照状态分
* 无状态组件：展示组件(侧重于装饰),样式组件(侧重于样式)，布局组件(圣杯布局等)
* 有状态组件，容器组件(负责数据和组件的组装)

高阶组件(抽取共同逻辑),例如：登录状态的判断，页面埋点等。loading加载等渲染劫持。
> 按照工程实践
* 通过文件夹的方式来切分代码
```
src
├── components
│   ├── basic(放基础的展示组件)
│   ├── container(布局)
│   └── hoc(高阶函数)
└── pages
```
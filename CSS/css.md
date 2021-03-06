### 1. 介绍下css盒子模型

* w3c标准盒模型：content,boder,padding,margin
* ie盒模型:content,boder,padding


### 2. 常见的布局方法

* 浮动布局：使用float。
* 定位布局 使用position
* 使用diplay
* flex布局
* grid布局
* 多列布局


### 3. css绝对定位和相对定位都是以谁为基准？


#### 4. bfc是什么，怎么样形成bfc，bfc有哪些用？

> bfc:block formatting content,块级格式化上下文。

### 5. css选择器有哪些和优先级？
* !important
* 内联
* ID 选择器：如 #id{}
* 类选择器：如 .class{}
* 属性选择器：如 [href="xxx"]{}
* 伪类选择器：如 :hover{}
* 标签选择器：如 span{}
* 伪元素选择器：如 ::before{}
* 通配符选择器：如 *{}

### 6. sass,less 预处理的优点？
* 可以提高代码的可读性和维护性。

### 7. 如何实现垂直水平居中？

1. 行内元素
2. flex布局
3. table
4. 绝对定位，定宽定高
5. transform绝对定位，定不定宽，不定高
* 绝对定位，top,botton,left,right =0, margin:auto 9;定宽高

### 8. css中隐藏元素的方法

* visibility:hidden
* display:none、
* z-index:-1
* opacity：0


### 9. 使用css实现一个持续的动画效果

```
animation:mymove 5s infinite;
@keyframes mymove {
from {top:0px;}
to {top:200px;}
}
```


----
JavaScript基础
----

----
### 1. javaScript有哪些基本数据类型?
----

> 基础类型(存储在栈内存)：
* Null
* Undefined
* Boolean
* String
* Number
* Symbol
* BigInt

> Object类型(存储在堆内存)
* Array
* RegExp
* Date
* Math
* Function

----
### 2. javaScript有哪些常用的数据类型检测方法？
----

* 通过typeof判断(可以发现不能正确的判断Null)
```
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
```
* instanceof
可以判断复杂的引用数据类型，但是不能正确判断基础数据类型

* Object.prototype.toString(通过返回统一格式的字符串判断)
```
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"
```

----
### 3. 如何实现一个深浅拷贝？
----

> 常见的浅拷贝的方法
* object.assgin
* 扩展运算符(...)
* concat，slice拷贝数组
> 常见的深拷贝方法
* JSON.stringfy(),缺点：Date会变成字符串，undefined,symbol会消失，同时NaN,infinity会变成null等。
* 手写递归(简单的版本，但无法判断Symbol和Array,RegExp等)
```
let obj1 = {
    'a':'1',
    'b':'2',
}
// 判断是否为引用类型，是的话再次递归调用函数。
const deepClone  = (obj)=>{
    let cloneObj = {}
    Object.keys(cloneObj).forEach(key=>{
        if(typeof obj[key]==='object'){
            cloneObj[key] = deepClone(obj[key])
        }
    })
    return cloneObj;
}
```




----
### 4. javaScipt中有哪些继承方式？
----
> 1. 原型链继承
* 通过prototype实现,缺点:多个实例共享同一个原型(内存空间)，其中一个实例改变，会随之影响其他实例。
```
function Parent1() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}
function Child1() {
    this.type = 'child1';
}
Child1.prototype = new Parent1();
```
> 2. 构造函数继承(call,bind)
* 可以解决原型链中属性共享的问题，缺点：只能继承父类的实例属性和方法，不能继承原型属性或者方法。
> 3. 组合继承
* 集合前面两种方式，既能解决**属性空间共享**问题，也能继承原型的属性和方法。
* 缺点:写起来有点繁琐。
```
function Parent(){
    this.name = 'Parent'
}
Parent.prototype.getName = function () {return this.name;}
function Child(){
    Parent.call(this) // 解决属性共享问题。
    this.type = 'child'
}
// 手动继承原型，解决无法继承原型的属性和方法问题
Child.prototype = new Parent()
//  原型的指向Child构造器
Child.prototype.constuctor = Child; 
```
> 4. 原型式继承 ,使用es5中的Object.ceate()方法
* 是一种浅拷贝。
* 存在和**原型链继承**一样的问题，**属性空间共享**。
> 5. 寄生式继承
* 在object.create基础上，先进行浅拷贝，然后在添加一些额外的方法，可以理解为是**原型式继承**的增强，优缺点和**原型式继承**一样
* 寄生组合式继承
> 6. 寄生组合式继承
* 相比**组合式**，使用object.create减少构造次数。
* 相比**寄生式**，使用call来**继承原型的属性和方法**
* 较好地实现了继承想要的结果，同时也减少了构造次数，减少了性能的开销。
> 7. extends关键字，实现了寄生组合式一样的效果。


----
### 5. 如何实现new、apply、call、bind方法？
----

> new方法：执行后返回一个对象，要么是实例对象，要么是return 返回的对象
* new 之后可以访问构造函数所在的原型链上的属性和方法
* 
```
function myNew(ctor, ...args) {
    if(typeof ctor !== 'function') {
      throw 'ctor must be a function';
    }
    let obj = {};
    obj.__proto__ = Object.create(ctor.prototype);
    let res = ctor.apply(obj,  [...args]);
    let isObject = typeof res === 'object' && typeof res !== null;
    let isFunction = typeof res === 'function';
    return isObject || isFunction ? res : obj;
};
function test(){
    this.name = '1'
    return {sex:'1'}
}

const a = myNew(test)
console.log(a)
console.log(a.sex)
console.log(a.name)
```

> call,apply方法
```
Function.prototype.call = function(ctx,...args){
    var context = ctx || window
    context.fn = this
    var result = context.fn(...args)
    delete context
    return result
}
Function.prototype.apply = function(ctx,...args){
    var context = ctx || window
    context.fn = this
    var result = context.fn(...args)
    delete context
    return result
}
```

> bind方法
* 满足函数柯里化。
* 和apply和call不同的是，返回的是一个函数。
```
Function.prototype.bind_ = function (obj) {
    // 1. bind只能被函数调用，非函数报错。
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    };
    // 第0位是this，所以得从第一位开始裁剪
    let [_,...args] = [...arguments]
    var fn = this;
    // 满足返回的是函数
    return function () {
        // 3. this.constructor === fn判断是否为new调用,满足柯里化
        fn.apply(this.constructor === fn? this:obj, args.concat([...arguments]));
    };
};
```

----
### 6. 什么是闭包？
----
* 简单点说：闭包就是嵌套函数
* 说清楚点，闭包就是可以访问另一个函数作用域中的变量的函数。

----
### 8. 闭包产生的原因？
----
* 不知道作用域？ --->[什么是作用域？](如何实现new、apply、call、bind方法？)
* 了解原因之前，得先知道什么是作用域链(当前作用域找不到变量时，就会往父级作用域链查找，这样一级一级的就形成了**作用域链**)


----
### 9. 什么是函数柯里化？
----
* 把需要接受**多个参数**的函数,转换为**传递单一参数**的函数

```
var curry = function(fn,args){
    var length = fn.length
    args = args || []
    // 提取第一个参数
    
    // var [firstArg ,...args] = args
    return function(){
        let firstArg = args.slice(0)
        //  把第一个参数，下一个函数的参数拼接起来
        var newArgs =  firstArg.concat([...arguments])
        // 参数的长度<参数总长度，使用call来满足柯里化
        if(newArgs.length < length){
            return curry.call(this,fn,newArgs)
        }else{
            // 参数的长度>=参数总长度,直接调用
            return fn.apply(this,newArgs)
        }
        
    } 
}
```


----
### 8. 什么是作用域？
----

* 变量能够被访问的范围区域(这里面包含有什么变量呀，函数呀等信息)


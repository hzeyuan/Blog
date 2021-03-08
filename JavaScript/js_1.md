----
### 1. 什么是同步，异步？
----

* 同步：在代码未执行完返回结果前，会阻塞之后的代码执行。
* 异步：在代码执行后，不会立刻获得返回结果，而是通过**回调函数**拿到结果，不影响之后的代码执行。

----
### 2. javascript异步发展历程？
----

* **回调函数**，像setTimeout/ setInterval ，容易造成嵌套，形成回调地狱。
* **Promise**, 好处是把嵌套改成了同步链式的写法，提高了可读性。
* **Generator** 生成器，通过yield交出函数执行权，返回的是迭代器。
* **async/await**, 语法糖，既可以让异步的逻辑表现的像同步一样，可以不用像Promise那样写很多个then。


###  3. promise all，race的实现?
* promise.all 等待异步操作全部执行完成，其中有一个未完成则报错。
* promise.race，等待异步操作中谁最先完成，返回谁。
```
class Promise {
  static all(proArr){
    return new Promise((resolve,reject)=>{
      let count = 0;
      let res = []
      let done = (i,data)=>{
        res[i] = data
        if(proArr.length === ++count){return resolve(res)}
      }
      proArr.forEach((pro,k)=>{
        pro.then(data=>done(k,data),reject)
      })
    })
  }
  static race(proArr){
    return new Promise((resolve,reject)=>{
      proArr.forEach((pro,k)=>{
      pro.then(resolve,reject);
      })
    })
  }
}
```
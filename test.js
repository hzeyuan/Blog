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

function add(a, b) {
    return a + b;
}
var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
})

// fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]
Function.prototype.bind_ = function (obj) {
    //第0位是this，所以得从第一位开始裁剪
    console.log('arguments',arguments);
    let [_,...args] = [...arguments]
    var fn = this;
    return function () {
        fn.apply(obj, args);
    };
};

var obj = {
    z: 1
};

function fn() {
    console.log(this.z);
};

var bound = fn.bind_(obj);
bound(); 
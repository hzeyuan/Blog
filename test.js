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



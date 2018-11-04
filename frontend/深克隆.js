// 浅拷贝
function shallowClone(obj) {
    var res = {}
    for (let key in obj) {
        res[key] = obj[key]
    }
    return res
}
// 浅拷贝实例，我们发现虽然oldObj.c.h被克隆了,但是它还与oldObj.c.h相等,
// 这表明他们依然指向同一段堆内存,这就造成了如果对newObj.c.h进行修改,也会影响oldObj.c.h,这就不是一版好的克隆.
console.log("============shallow clone===================")
// 被克隆对象
const oldObj = {
    a: 1,
    b: [ 'e', 'f', 'g' ],
    c: { h: { i: 2 } }
}
const newObj = shallowClone(oldObj)
console.log(newObj.c.h, oldObj.c.h) // { i: 2 } { i: 2 }
console.log(`newObj.c.h === oldObj.c.h: ${oldObj.c.h === newObj.c.h}`) // true
console.log("============shallow clone===================")
console.log("\n")

// 使用parse的拷贝
function parseClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

// 仍然用浅克隆的例子，可以发现，克服了浅克隆的问题：指向堆内存的属性无法克隆的问题
const oldObj1 = {
    a: 1,
    b: [ 'e', 'f', 'g' ],
    c: { h: { i: 2 } }
};

console.log("============parse clone===================")
const newObj1 = JSON.parse(JSON.stringify(oldObj1));
console.log(newObj1.c.h, oldObj1.c.h); // { i: 2 } { i: 2 }
console.log(oldObj1.c.h === newObj1.c.h); // false
newObj1.c.h.i = 'change';
console.log(newObj1.c.h, oldObj1.c.h); // { i: 'change' } { i: 2 }
console.log("============parse clone===================")
// 但是这种拷贝也有问题：
// 1.他无法实现对函数 、RegExp等特殊对象的克隆
//
// 2.会抛弃对象的constructor,所有的构造函数会指向Object
//
// 3.对象有循环引用,会报错
// 构造函数
function person(pname) {
    this.name = pname;
}

const Messi = new person('Messi');

// 函数
function say() {
    console.log('hi');
};

const oldObj3 = {
    a: say,
    b: new Array(1),
    c: new RegExp('ab+c', 'i'),
    d: Messi
};

const newObj3 = JSON.parse(JSON.stringify(oldObj3));
console.log("============parse clone false===================")
// 无法复制函数
console.log(newObj3.a, oldObj3.a); // undefined [Function: say]
// 稀疏数组复制错误
console.log(newObj3.b[0], oldObj3.b[0]); // null undefined
// 无法复制正则对象
console.log(newObj3.c, oldObj3.c); // {} /ab+c/i
// 构造函数指向错误
console.log(newObj3.d.constructor, oldObj3.d.constructor); // [Function: Object] [Function: person]
// 循环引用也会出现错误
const oldObjCirclar = {};

oldObjCirclar.a = oldObjCirclar;

const newObjCircular = JSON.parse(JSON.stringify(oldObjCirclar));
console.log(newObjCircular.a, oldObjCirclar.a); // TypeError: Converting circular structure to JSON
console.log("============parse clone false===================")

// 自己构建深拷贝

// 判断类型
const hasType = (obj, type) => {
    if (typeof obj !== 'object') return false
}


// 深拷贝

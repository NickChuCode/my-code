// 完成一个 flikerProps 方法，接受一个对象作为参数。可以把该对象的不可遍历属性变成可遍历属性；把可遍历属性变成不可遍历属性。例如：
//
// const obj = {}
// const config1 = { enumerable: false, configurable: true }
// const config2 = { enumerable: true, configurable: true }
//
// Object.defineProperties(obj, {
//   green: config1,
//   red: config2,
//   blue: config1,
//   yellow: config2
// })
//
// console.log(Object.keys(obj)) // => ["red", "yellow"]
// flikerProps(obj) // 闪烁
// console.log(Object.keys(obj)) // => ["green", "blue"]
// flikerProps(obj) // 闪烁
// console.log(Object.keys(obj)) // => ["red", "yellow"]
// flikerProps(obj) // 闪烁
// console.log(Object.keys(obj)) // => ["green", "blue"]
// 注意不要触碰到传入对象的 prototype。

const flikerProps = (obj) => {
    // getOwnProertyNames会返回所有的自身属性，无论是否enumerable
    const a = Object.getOwnPropertyNames(obj)
    const b = Object.keys(obj)
    // 因为propertyIsEnumerable是obj原型上的方法，而题目中有要求，所以需要绕一下
    for (var i = 0; i < a.length; i++) {
        Object.defineProperty(obj, a[i], {
            enumerable: b.indexOf(a[i]) === -1
        })
    }
}
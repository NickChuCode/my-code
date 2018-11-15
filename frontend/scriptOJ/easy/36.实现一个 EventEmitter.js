// 观察者模式在前端开发中非常常用，我们经常用的事件就是观察者模式的一种体现。它对我们解耦模块、开发基于消息的业务起着非常重要的作用。Node.js 原生自带 EventEmitter 模块，可见它的重要性。
//
// 完成 EventEmitter 模块，它是一个类，它的实例具有以下几个方法：on、emit、off：
//
// on(eventName, func)：监听 eventName 事件，事件触发的时候调用 func 函数。
// emit(eventName, arg1, arg2, arg3...)：触发 eventName 事件，并且把参数 arg1, arg2, arg3... 传给事件处理函数。
// off(eventName, func)：停止监听某个事件。
// 使用例子：
//
// const emitter = new EventEmitter()
// const sayHi = (name) => console.log(`Hello ${name}`)
// const sayHi2 = (name) => console.log(`Good night, ${name}`)
//
// emitter.on('hi', sayHi)
// emitter.on('hi', sayHi2)
// emitter.emit('hi', 'ScriptOJ')
// // => Hello ScriptOJ
// // => Good night, ScriptOJ
//
// emitter.off('hi', sayHi)
// emitter.emit('hi', 'ScriptOJ')
// // => Good night, ScriptOJ
//
// const emitter2 = new EventEmitter()
// emitter2.on('hi', (name, age) => {
//   console.log(`I am ${name}, and I am ${age} years old`)
// })
// emitter2.emit('hi', 'Jerry', 12)
// // => I am Jerry, and I am 12 years old
// （本题来源：阿里巴巴前端笔试题）

// 题目看起来很高大上，其实不难：
// 1. 并没有考察观察者模式
// 2. 考察的还是es6中class的基本用法
// 3. 实际是封装一个event queue，给其添加on, emit和off方法
class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(eventName, fn) {
        const fns = this.events[eventName] || []
        fns.push(fn)
        this.events[eventName] = fns
    }
    emit(eventName, ...args) {
        const fns = this.events[eventName] || []
        fns.forEach((fn) => {
            fn(...args)
        })
    }
    off(eventName, fn) {
        const fns = this.events[eventName] || []
        if (fns.includes(fn)) fns.splice(fns.indexOf(fn), 1)
    }
}
// 在 React、Redux 当中，经常会用到一种 shallowEqual 来做性能优化。shallowEqual 结合 immutable 的共享数据结构
// 可以帮助我们简单地检测到哪些数据没有发生变化，就不需要做额外的渲染等操作，优化效果拨群。
//
// 简单来说，shallowEqual 接受两个参数，如果这两个参数的值相同、或者这两个参数都是对象并且对象的第一层数据相同，那么就返回 true；
// 否则就返回 false。例如：
//
// shallowEqual(1, 1) // true
// shallowEqual(1, 2) // false
// shallowEqual('foo', 'foo') // true
// shallowEqual(window, window) // true
// shallowEqual('foo', 'bar') // false
// shallowEqual([], []) // true
// shallowEqual([1, 2, 3], [1, 2, 3]) // true
// shallowEqual({ name: 'Jerry' }, { name: 'Jerry' }) // true
// shallowEqual({ age: NaN }, { age: NaN }) // true
// shallowEqual(null, { age: NaN }) // false
//
// var a = { name: 'Jerry' }
// var b = { age: 12 }
// shallowEqual({ a, b }, { a, b }) // true
// shallowEqual({ name: { a, b } }, { name: { a, b } } // false
// shallowEqual({ a, b }, { a }) // false
// 请你完成 shallowEqual 函数。

// 使用ES6的Object.is方法，可以很容易的实现
const shallowEqual = (x, y) => {
    if (typeof x !== typeof y) return false
    if (typeof x !== 'object') {
        return Object.is(x, y)
    } else {
        if (x === null || y === null) return x === y
        let [keys1, keys2] = [Object.keys(x), Object.keys(y)]
        if (keys1.length !== keys2.length) return false
        return keys1.every((key) => Object.is(x[key], y[key]))
    }
}
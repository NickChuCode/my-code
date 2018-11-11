// 实现一个函数 where，它返回它被调用的时候所在的函数的名字，例如：
//
// function main () {
//   where() // => 'main'
// }
//
// function a () {
//   function b () {
//     where() // => 'b'
//   }
//   b()
// }
//
// main()
// a()
// 注意，箭头函数默认是在严格模式下，而arguments.callee caller不能再严格模式下运行
// 这道题还有一个用严格模式实现版本（#47）
function where () {
    // 如果在全局环境中调用，这个值为null，所以要处理一下
    if (arguments.callee.caller === null) {
        return 'main'
    } else {
        return arguments.callee.caller.name
    }
}

// arguments.caller被废弃了，所以我们可以用arguments.callee.caller实现
// 也可以用Function.caller实现，下面这个就是Function.caller的实现版本
// 两个版本的思路是一样的
function where () {
    if (where.caller === null) {
        return 'main'
    } else {
        return where.caller.name
    }
}
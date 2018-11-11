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
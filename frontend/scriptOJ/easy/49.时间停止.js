// pause 函数可以让一个函数暂停运行一段时间（ms）以后继续运行。例如：
//
// async function run () {
//   console.log('Hello')
//   await pause(1000) // 续一秒
//   console.log('World') // 一秒以后继续运行
// }
// 请你完成 pause 函数的编写。
const pause = (time) => {
    return new Promise(function(resolve, reject) {
        // resolve或者reject必须有一个，否则promise不知道何时结束
        setTimeout(resolve, time)
    })
}
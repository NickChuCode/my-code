// 有时候我们需要访问一个对象较深的层次，但是如果这个对象某个属性不存在的话就会报错，例如：
//
// var data = { a: { b: { c: 'ScriptOJ' } } }
// data.a.b.c // => scriptoj
// data.a.b.c.d // => 报错，代码停止执行
// console.log('ScriptOJ') // => 不会被执行
const safeGet = (data, path) => {
    /* TODO */
    var paths = path.split(".")
    var res = data
    for (var i = 0; i < paths.length; i++) {
        if (res.hasOwnProperty(paths[i])) {
            res = res[paths[i]]
        } else {
            return undefined
        }
    }
    return res
}

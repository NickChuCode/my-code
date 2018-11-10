// 请你完成 convertSymbolToNormalStr 函数，它会把一个键全是 Symbol 的对象转换成键全是 String 的对象，而同时值保持不变。例如：
//
// convertSymbolToNormalStr({ [Symbol('name')]: 'Jerry' }) // => { name: 'Jerry' }

const convertSymbolToNormalStr = (obj) => {
    var res = {}
    // for in 迭代的是非symbol的属性，这是一个坑，可以用for of 或者forEach来代替
    for (let key of Object.getOwnPropertySymbols(obj)) {
        let value = obj[key]
        if (typeof key === 'symbol') {
            key = key.toString().slice(7, -1)
        }
        // 考虑value是obj，并且其中有symbol属性的情况
        if (typeof value === 'object' && !Array.isArray(value)) {
            value = convertSymbolToNormalStr(value)
        }
        res[key] = value
    }
    return res
}
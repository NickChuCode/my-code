// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组

function getUrlParam(sUrl, sKey) {
    var index = sUrl.indexOf("?")
    if (index === -1) {
        if (sKey === undefined) {
            return {}
        } else {
            return ""
        }
    }
    var res = {}
    var queryString = sUrl.split("?")[1].split("#")[0]
    var queries = queryString.split("&")
    for (var i = 0; i < queries.length; i++) {
        var pair = queries[i].split("=")
        var key = pair[0]
        var value = pair[1]
        if (res.hasOwnProperty(key)) {
            if (Array.isArray(res[key])) {
                res[key].push(value)
            } else {
                var temp = res[key]
                res[key] = []
                res[key].push(temp)
                res[key].push(value)
            }
        } else {
            res[key] = value
        }
    }
    if (sKey) {
        return res[sKey] ? res[sKey] : ""
    } else {
        return res
    }
}

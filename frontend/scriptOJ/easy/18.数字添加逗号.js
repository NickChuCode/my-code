// 完成函数 commafy，它接受一个数字作为参数，返回一个字符串，
// 可以把整数部分从右到左每三位数添加一个逗号，如：12000000.11 转化为 12,000,000.11。
function commafy (num) {
    /* TODO */
    // 去掉可能的负号，方便处理
    var number = num >=0 ? num : -num
    var res = ("" + number).split(".")
    var integers = res[0].split("")
    // i不能为0，因为逗号不能在数字的头部
    for (var i = integers.length - 3; i >= 1; i-=3) {
        integers.splice(i, 0, ",")
    }
    var res = res.length > 1 ? integers.join("") + "." + res[1] : integers.join("")
    return num >= 0 ? res : '-' + res
}
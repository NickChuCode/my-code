/**
 * @param {number} x
 * @return {number}
 */

// 字符串不是数组，但可以通过split和join转换成数组并转换回字符串，这样就可以利用js中数组的丰富的方法
var reverse = function(x) {
    var isPositive = x >= 0 ? true : false

    var mid = isPositive ? "" + x : "" + (-x)

    var res = mid.split("")
    res = res.reverse()
    res = parseInt(res.join(""))
    if (!isPositive) res = -res


    if (res > (Math.pow(2, 31) - 1) || res < -Math.pow(2, 31)) return 0
    return res
};

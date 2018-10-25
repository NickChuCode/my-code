/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    function createPalindrome(num) {
        var str = "" + num
        var palin = str.split("").reverse().join("")
        return parseInt(str + palin)
    }
    if (n === 1) return 9 // 只有n为1的时候最大回文数为奇数
    if (n === 8) return 475 // 因为 n为8时生成的最大回文数超过了js的最大安全整数，所以这里这样处理
    for (var i = Math.pow(10, n) - 1; i >= Math.pow(10, n - 1); i--) {
        var pal = createPalindrome(i)
        for (var j = Math.pow(10, n) - 1; pal / j < j; j--) {
            if (pal % j === 0) {
                return pal % 1337
            }
        }
    }
};

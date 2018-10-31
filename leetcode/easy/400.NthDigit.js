// Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
// Example:
//
// Input:
//     11
//
// Output:
//     0
//
// Explanation:
//     The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
// 题目不难，但需要对数字敏感，而且判断条件一定要选好
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var digitType = 1
    var digitNum = 9
    var res = []
    var idx = n

    // 1~9的判断条件和其他的略有不同，所以单独判断
    if (n < 10) {
        return n
    } else {
        // 找到是几位数（digitType）
        while (n > digitType * digitNum) {
            n -= digitType * digitNum
            digitType++
            digitNum *= 10
        }

        //找到n在第几个数中（从1开始）
        var numPos = Math.ceil(n / digitType)
        // 找到n在这个数的第几位（从1开始）
        var digitPos = n % digitType === 0 ? digitType : n % digitType
        var num = "" + (Math.pow(10, digitType - 1) + numPos - 1)
        return +num[digitPos - 1]
    }
};

// Given a non-negative integer c, your task is to decide
// whether there're two integers a and b such that a2 + b2 = c.
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for (var i = Math.floor(Math.sqrt(c)); i >= 0; i--) {
        // 注意Number的这些用法
        if (Number.isInteger(Math.sqrt(c - i * i))) return true
    }
    return false
};

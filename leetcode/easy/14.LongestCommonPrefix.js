// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    var short = strs[0]
    for (var i = 1; i < strs.length; i++) {
        if (short.length > strs[i].length) {
            short = strs[i]
        }
    }
    while (short.length > 0) {
        // 有了every和startsWith这两个方法以后，题目就很简单了，可惜startsWith是ES6的
        var res = strs.every((s) => {
            return s.startsWith(short)
        })
        if (res) {
            return short
        } else {
            // 貌似在裁剪字符串的时候，substring比slice的效率要更高一些
            short = short.substring(0, short.length - 1)
        }
    }
    return short
};

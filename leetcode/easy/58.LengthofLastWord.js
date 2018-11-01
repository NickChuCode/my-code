// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
// Example:
//
// Input: "Hello World"
// Output: 5
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 注意"a "的情况，它最后一个字符串是a不是""，所以要先trim一下
    var res = s.trim().split(" ")
    if (res.length < 1) {
        return 0
    }else if (res[res.length - 1] === null) {
        return 0
    } else {
        return res[res.length - 1].length
    }
};

// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
//
// Example 1:
// Input: [1,4,3,2]
//
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
// 思路很简单，只需要将数组排序，然后较小的数都是靠左的，所以隔一个数相加即可
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    // js自带的sort对负数的排序是有问题的，所以需要自己写compare函数
    nums.sort((x, y) => x - y)
    var res = 0
    for (var i = 0; i < nums.length; i+=2) {
        res += nums[i]
    }
    return res
};

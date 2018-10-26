/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var length = nums.length
    if (k > length) {
        k = k % length
    }
    // 如果可以占用额外的空间来修改的方法
    // sums = nums.slice(-k)
    // nums = sums.concat(nums).slice(0, length)

    // 不能占用额外空间修改的方法
    while (k > 0) {
        var num = nums.pop()
        nums.unshift(num)
        k--
    }
};

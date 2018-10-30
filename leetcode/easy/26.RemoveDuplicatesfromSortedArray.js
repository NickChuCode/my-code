// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// Example 1:
//
// Given nums = [1,1,2],
//
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
//
// It doesn't matter what you leave beyond the returned length.
// 题目要求在原数组上改，所以用for和迭代遍历的方法都不合适，所以用while来判断
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var cur = nums[0]
    var i = 1
    while (nums[i] !== undefined) {
        if (cur === nums[i]) {
            nums.splice(i, 1)
            continue
        } else {
            cur = nums[i]
            i++
        }
    }
    return nums.length
};

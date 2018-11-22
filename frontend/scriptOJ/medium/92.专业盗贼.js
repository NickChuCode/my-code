// 你是一个盗窃专家，某一天晚上你要去盗窃某一条街道的一排房子。这些房子都有相连的防盗系统，如果你把相邻的两家都偷了那么就会触发报警器。
//
// 用一个数组来表示这些房子的金钱数量，请你完成 rob 函数，计算出在不触发报警器的情况下最多能偷多少钱。例如：
//
// rob([1, 2, 3]) // => 4

// 解题思路：这是一个动态规划问题，比如你要选择是否偷i家，如果要偷，则你需要偷i - 2家；
// 如果不偷，则问题转换为偷i - 1家的最大值
const rob = (nums) => {
    var n = nums.length
    var totalNums = []
    totalNums[0] = 0
    totalNums[1] = nums[0]
    totalNums[2] = maxTotal(nums[0], nums[1])
    for (var i = 3; i < n + 1; i++) {
        // 注意：这里totalNums里的i表示偷前i家的最大值，而nums中第i家的索引是i - 1
        totalNums[i] = maxTotal(totalNums[i - 2] + nums[i - 1], totalNums[i - 1])
    }
    return totalNums[n]
}

function maxTotal(left, right) {
    return left > right ? left : right
}
// 有一个楼梯，你一次只能往上走一阶或者两阶。请编写函数 climbStairs，它接受一个整数 n 作为参数，表示这个楼梯有多少阶。
// 请你返回一个整数，表示这个楼梯一共有多少种走法。例如：
//
// climbStairs(1) // => 1
// climbStairs(2) // => 2
// climbStairs(3) // => 3
// climbStairs(10) // => 89

// 解题思路：貌似也是一个动态规划的问题，如果想知道n层楼梯有几种走法，
// 因为最后一步只有1阶和2阶两种走法，所以n层楼梯的走法就是n-2层走法和n-1层走法之和
const climbStairs = (n) => {
    if (n < 0) return 0
    var res = new Array(n + 1)
    res[0] = 0
    for (var i = 1; i < n + 1; i++) {
        if (i <= 3) {
            res[i] = i
        } else {
            res[i] = res[i - 1] + res[i - 2]
        }
    }
    return res[n]
}
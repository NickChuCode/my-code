// You are standing at position 0 on an infinite number line. There is a goal at position target.
//
// On each move, you can either go left or right. During the n-th move (starting from 1), you take n steps.
//
// Return the minimum number of steps required to reach the destination.
//
// Example 1:
// Input: target = 3
// Output: 2
// Explanation:
// On the first move we step from 0 to 1.
// On the second step we step from 1 to 3.
/**
 * @param {number} target
 * @return {number}
 */
// 这个题目需要一些数学原理：我们先对target取绝对值，因为正负不影响最小步数。
// 然后我们求出第n步，使得从1累加到n刚好大于等于target，我们可以反向利用求和公式，来求解出n，
// 然后算出当前n的累加和sum，如果此时sum和target正好相等，perfect！直接返回n，
// 否则就是计算差值，如果差值时偶数，那么也直接返回n，如果是奇数，判断此时n的奇偶，如果n是奇数，则返回n+2，若n是偶数，返回n+1
var reachNumber = function(target) {
    var target = Math.abs(target)
    var count = 0
    var cur = 0
    var step = 1
    function isEven(num) {
        return num % 2 === 0 ? true : false
    }

    while (cur < target) {
        cur += step
        count++
        step = count + 1
    }
    var gap = cur - target
    if (gap === 0 || isEven(gap)) return count
    if (!isEven(gap)) {
        return isEven(count) ? count + 1 : count + 2
    }
};

// 有一个数组，这个数组从两个地方开始升序，一个是开始，一个是中间。例如：
//
// [10, 21, 32, 11, 16, 40] // 从 0 和 3 开始升序
// [1, 5, 10, 11, 3, 4, 8, 12, 30] // 0 和 4 开始升序
// 请你完成 merge 函数，可以把类似上面的数组变成一个完全升序的数组（直接修改原来的数组）。
// 你不能用 sort 方法，并且只能使用一次循环。

// 这道题是归并排序的基础，要记忆
const move = (arr, i, j) => arr.splice(i, j - i + 1, ...[arr[j], ...arr.slice(i, j)])
const merge  = (arr) => {
    // 按位或0可以实现取整（floor）的效果
    let j = arr.length / 2 | 0
    for (var i = 0; i < arr.length; i++) {
        if (i >= j) return
        if (arr[i] > arr[j]) move(arr, i, j++)
    }
}
// 完成一个函数 partition，它接受一个数组作为参数。它会搬动数组中的元素，使得所有小于第一个项的元素都搬动到它的左边，所有大于第一个项的元素都搬动到右边。例如：
//
// const arr = [3, 1, 6, 2, 4, 5]
// partition(arr)
// console.log(arr) // => [2, 1, 3, 6, 4, 5]
// 输入的数组的第一个项是 3，所以最后小于 3 的 1、2 的都到了左边，大于 3 的 4， 5， 6 都到了右边。
//
// 请你在不能使用任何数组原生方法，只能使用循环和赋值的情况下完成 partition 函数。

// 这道题实际考的就是快排的partition函数
// 很经典，没什么道理，背下来
const partition = (arr) => {
    var i = 0
    var j = arr.length
    var pivot = arr[i]
    function swap(i, j) {
        var tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    while(true) {
        while(arr[++i] < pivot) if (i == arr.length - 1) break
        while(arr[--j] > pivot) if (j == 0) break
        if (i >= j) break
        swap(i, j)
    }
    swap(0, j)
    return arr
}
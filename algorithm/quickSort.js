// 前提是min, max为整数，否则要对min做ceil，max做floor操作
function getRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min))
}

// 生成len长度的随机数组
function generateArr(len, arr) {
    for (var i = 0; i < len; i++) {
        arr.push(getRandomInt(1, len));
    }
}

function swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = getRandomInt(0, i)
        swap(arr, i, j)
    }
}

function quickSort(arr) {
    shuffle(arr) // 清除对输入的依赖
    sort(arr, 0, arr.length - 1)
}

function sort(arr, lo, hi) {
    if (hi <= lo) return
    var j = partition(arr, lo, hi)
    sort(arr, lo, j - 1)
    sort(arr, j + 1, hi)
}

function partition(arr, lo, hi) {
    // 将数组切分成a[lo..i - 1], a[i]和a[i + 1..hi]
    var i = lo
    var j = hi + 1
    var pivot = arr[lo]
    while (true) {
        while (arr[++i] < pivot) if (i == hi) break
        while (pivot < arr[--j]) if (j == lo) break
        if (i >= j) break
        swap(arr, i, j)
    }
    swap(arr, lo, j)
    return j
}

// 网上最多的一种快排（阮一峰版本）
var quickSort2 = function(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort2(left).concat([pivot], quickSort2(right));
};

var test = []
generateArr(100000, test)

console.time("quickSort1")
quickSort(test)
console.timeEnd("quickSort1")

var test1 = []
generateArr(100000, test1)
console.time("quickSort2")
quickSort2(test1)
console.timeEnd("quickSort2")

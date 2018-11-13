// 编写一个 JavaScript 函数，接受一个仅包含数字的 多维数组 ，返回拍平以后的结果。例如传入：[1, [[2], 3, 4], 5]，返回 [1, 2, 3, 4, 5]。
//
// （本题来源：阿里巴巴前端笔试题）
const flatten = (arr) => {
    var res = []
    function flat(ar) {
        for (var i = 0; i < ar.length; i++) {
            if (Array.isArray(ar[i])) {
                flat(ar[i])
            } else {
                res.push(ar[i])
            }
        }
    }
    // 记得还要调用一次
    flat(arr)
    return res
}

// 另一个版本，判断改了一下，没什么区别，generator版本（#91）要更简洁一些，直接递归自身，
// 而这里的两个版本要递归子函数的原因在于，需要一个上一级的res数组，来承载数据，
// 如果直接递归函数，数组和递归同一级，返回的最后还是一个多维数组
const flatten = (arr) => {
    var res = []
    function flat(ar) {
        for (var i = 0; i < ar.length; i++) {
            if (typeof ar[i] === 'number') {
                res.push(ar[i])
            } else {
                flat(ar[i])
            }
        }
    }
    flat(arr)
    return res
}